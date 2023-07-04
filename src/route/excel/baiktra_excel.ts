import { Request, Response } from 'express';
import Excel from "exceljs";
import path from "path";
import { BaiKiemTra } from "../../entities/baiKiemTra";
import { dataSource } from '../../data-source';



export const exportBaiKiemTraExcel = async (req: Request, res: Response) => {
    try {

        type baikiemtra = {
            id: number;
            ten: string;
        }

        let repo = dataSource.getRepository(BaiKiemTra)

        const baikiemtra_excel = await repo.createQueryBuilder('bkt')
            .select('bkt.id')
            .addSelect('bkt.ten')
            .getMany()
        const danhsach_baikiemtra: baikiemtra[] = baikiemtra_excel

        const exportBaiKiemTraFile = async () => {
            const workBook = new Excel.Workbook();
            const worksheet = workBook.addWorksheet('baikiemtra list');

            worksheet.columns = [
                { key: 'id', header: 'id' },
                { key: 'ten', header: 'ten' }
            ]

            danhsach_baikiemtra.forEach((hs) => {
                worksheet.addRow(hs);
            });

            const exportPath = path.resolve(__dirname, 'baikiemtra.xlsx');

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


        exportBaiKiemTraFile();
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