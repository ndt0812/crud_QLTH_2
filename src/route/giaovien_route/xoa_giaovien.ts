import express from "express";
import { GiaoVien } from "../../entities/giaoVien";

const router = express.Router();

router.delete("/QLTH/giaovien/:giaovienId", async (req,res) => {
    try {
        const { giaovienId } = req.params;

        await GiaoVien.delete(parseInt(giaovienId))
    
        return res.json({
            status: 'oke',
            msg: 'xoa giao vien thanh cong'
        })
    } catch (error) {
        return res.json({
            status: 'err',
            msg: 'xoa giao vien that bai '
        })
    }
})

export { router as xoaGiaoVien}