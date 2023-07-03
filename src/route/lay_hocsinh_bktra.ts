import express from "express";
import { BaiKiemTra } from "../entities/baiKiemTra";
import { Diem } from "../entities/diem_ktra";
import { createQueryBuilder } from 'typeorm'
const { role } = require('../middleware/role');

const router = express.Router();

router.get('/QLTH/layhocsinh/:bktraId', async (req, res) => {
    try {

        const { bktraId } = req.params;

        await BaiKiemTra.findOne({
            where: {
                id: parseInt(bktraId)
            }
        })


        if (bktraId != null) {
            //     // var id = Number(bktraId)
            //     // var a = await Diem.find({
            //     //     where: {
            //     //         baiktra: {
            //     //             id: Equal(id)
            //     //         }
            //     //     },
            //     //     relations:
            //     //     {
            //     //         baiktra: true
            //     //     }
            //     // })

            const lay_baiktra_id = await createQueryBuilder(Diem, 'd')
                .select('d.hocsinh')
                .where('d.baiktra = :bktraId', { bktraId })
                .getMany()

            return res.json(lay_baiktra_id)
        } else {
            return res.json({
                status: 'err',
                msg: 'ko tim thay bai ktra'
            })
        }

    } catch (error) {
        return res.json({
            status: 'err',
            msg: error.message
        })
    }
})

export { router as layDanhSachHocSinh }