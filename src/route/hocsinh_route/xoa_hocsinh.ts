import express from "express";
import { HocSinh } from "../../entities/hocSinh";

const router = express.Router();

router.delete("/QLTH/hocsinh/:hocsinhId", async (req,res) => {
    try {
        const { hocsinhId } = req.params;

        await HocSinh.delete(parseInt(hocsinhId))
    
        return res.json({
            status: 'oke',
            msg: 'xoa hoc sinh thanh cong'
        })
    } catch (error) {
        return res.json({
            status: 'err',
            msg: 'xoa hoc sinh that bai '
        })
    }
})

export { router as xoaHocSinh}