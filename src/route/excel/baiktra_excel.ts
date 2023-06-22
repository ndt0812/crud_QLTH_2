import express from "express";
import Excel from "exceljs";
import { createQueryBuilder } from "typeorm";
import path from "path";
import { BaiKiemTra } from "../../entities/baiKiemTra";


const router = express.Router();

router.get('/QLTH/bkt/export', async (req, res) => {
    try {

        type baikiemtra = {
            id: number;
            ten: string;
        }

        const baikiemtra_excel = await createQueryBuilder(BaiKiemTra, 'bkt')
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
})

export { router as exportBaiKiemTraExcel }