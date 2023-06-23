import express from "express";
import Excel from "exceljs";
import { createQueryBuilder } from "typeorm";
import path from "path";
import { GiaoVien } from "../../entities/giaoVien";


const router = express.Router();

router.get('/QLTH/giaovien/export', async (req, res) => {
    try {

        type giaovien = {
            id: number;
            so_nam_kinh_nghiem: number;
            ten: string;
        }

        const giaovien_excel = await createQueryBuilder(GiaoVien, 'gv')
            .select('gv.id')
            .addSelect('gv.so_nam_kinh_nghiem')
            .addSelect('gv.ten')
            .getMany()
        const danhsach_giaovien: giaovien[] = giaovien_excel

        const exportGiaoVienFile = async () => {
            const workBook = new Excel.Workbook();
            const worksheet = workBook.addWorksheet('giaovien list');

            worksheet.columns = [
                { key: 'id', header: 'id' },
                { key: 'so_nam_kinh_nghiem', header: 'so_nam_kinh_nghiem' },
                { key: 'ten', header: 'ten' },
            ]

            danhsach_giaovien.forEach((hs) => {
                worksheet.addRow(hs);
            });

            const exportPath = path.resolve(__dirname, 'giaovien.xlsx');

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


        exportGiaoVienFile();
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

export { router as exportGiaoVienExcel }