import { Request, Response } from 'express';
import Excel from "exceljs";
import { HocSinh } from "../../entities/hocSinh";
import path from "path";
import { dataSource } from '../../data-source';

export const exportHocSinhExcel = async (req: Request, res: Response) => {
    try {

        type hocsinh = {
            id: number;
            ten: string;
            ngay_sinh: Date;
        }

        let repo = dataSource.getRepository(HocSinh)

        const hocsinh_excel = await repo.createQueryBuilder('hs')
            .select('hs.id')
            .addSelect('hs.ten')
            .addSelect('hs.ngay_sinh')
            .getMany()

        const danhsach_hocsinh: hocsinh[] = hocsinh_excel

        const exportHocSinhFile = async () => {
            const workBook = new Excel.Workbook();
            const worksheet = workBook.addWorksheet('HocSinh list');

            worksheet.columns = [
                { key: 'id', header: 'id' },
                { key: 'ten', header: 'ten' },
                { key: 'ngay_sinh', header: 'ngay_sinh' }
            ]

            danhsach_hocsinh.forEach((hs) => {
                worksheet.addRow(hs);
            });

            const exportPath = path.resolve(__dirname, 'hocsinh.xlsx');

            await workBook.xlsx.writeFile(exportPath);

            worksheet.columns.forEach((sheetColumn) => {
                sheetColumn.font = {
                    size: 12,
                };
                sheetColumn.width = 30;
            });

            worksheet.getRow(1).font = {
                bold: true,
                size: 13,
            };
        };


        exportHocSinhFile();
        return res.json({
            status: 'oke',
            msg: 'luu file excel thanh cong'
        });

    } catch (error) {
        return res.json({
            status: 'err',
            msg: error.message
        })
    }
}