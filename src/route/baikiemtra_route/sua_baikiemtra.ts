import express from "express";
import { BaiKiemTra } from "../../entities/baiKiemTra";
const { role } = require('../../middleware/role');

const router = express.Router();

router.put("/QLTH/baikiemtra/:baikiemtraId", role(['ADM']), async (req, res) => {
    try {
        const { baikiemtraId } = req.params;
        const baikiemtra = req.body;

        const new_baikiemtra = await BaiKiemTra.findOne({
            where: { id: parseInt(baikiemtraId) }
        })
        if (!new_baikiemtra) {
            throw new Error(" ko tim thay bai kiem tra de update")
        }
        new_baikiemtra.ten = baikiemtra.ten;

        await new_baikiemtra.save();

        return res.json({
            status: 'oke',
            msg: 'sua bai kiem tra thanh cong'
        })
    } catch (error) {
        return res.json({
            status: 'err',
            msg: 'sua bai kiem tra that bai '
        })
    }
})

export { router as suaBaiKiemTra }