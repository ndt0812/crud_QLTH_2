import { Request, Response } from 'express';
import Excel from "exceljs";
import path from "path";
import { MonHoc } from "../../entities/monHoc";
import { dataSource } from '../../data-source';

export const exportMonHocExcel = async (req: Request, res: Response) => {
    try {

        type monhoc = {
            id: number;
            ten: string;
        }

        let repo = dataSource.getRepository(MonHoc)

        const monhoc_excel = await repo.createQueryBuilder('mn')
            .select('mn.id')
            .addSelect('mn.ten')
            .getMany()
        const danhsach_monhoc: monhoc[] = monhoc_excel

        const exportMonHocFile = async () => {
            const workBook = new Excel.Workbook();
            const worksheet = workBook.addWorksheet('monhoc list');

            worksheet.columns = [
                { key: 'id', header: 'id' },
                { key: 'ten', header: 'ten' }
            ]

            danhsach_monhoc.forEach((hs) => {
                worksheet.addRow(hs);
            });

            const exportPath = path.resolve(__dirname, 'monhoc.xlsx');

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


        exportMonHocFile();
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