import express from "express";
import { BaiKiemTra } from "../../entities/baiKiemTra";
const { role } = require('../../middleware/role');

const router = express.Router();

router.delete("/QLTH/baikiemtra/:baikiemtraId", role(['ADM']), async (req, res) => {
    try {
        const { baikiemtraId } = req.params;

        await BaiKiemTra.delete(parseInt(baikiemtraId))

        return res.json({
            status: 'oke',
            msg: 'xoa bai kiem tra thanh cong'
        })
    } catch (error) {
        return res.json({
            status: 'err',
            msg: 'xoa bai kiem tra that bai '
        })
    }
})

export { router as xoaBaiKiemTra }