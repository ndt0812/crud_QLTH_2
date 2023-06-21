import express from "express";
import { HocSinh } from "../../entities/hocSinh";

const router = express.Router();

router.put("/QLTH/hocsinh/:hocsinhId", async (req, res) => {
    try {
        const { hocsinhId } = req.params;
        const hocsinh = req.body;

        const new_hocsinh = await HocSinh.findOne({
            where: { id: parseInt(hocsinhId) }
        })
        if (!new_hocsinh) {
            throw new Error(" ko tim thay hoc sinh de update")
        }
        new_hocsinh.ten = hocsinh.ten;
        new_hocsinh.ngay_sinh = hocsinh.ngay_sinh;

        await new_hocsinh.save();

        return res.json({
            status: 'oke',
            msg: 'sua hoc sinh thanh cong'
        })
    } catch (error) {
        return res.json({
            status: 'err',
            msg: 'sua hoc sinh that bai '
        })
    }
})

export { router as suaHocSinh }