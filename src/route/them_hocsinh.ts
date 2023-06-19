import express from 'express';
import { HocSinh } from '../entities/hocSinh';

const router = express.Router();

router.post("/QLTH/hocsinh", async (req,res) => {
    const {
        ten,
        ngay_sinh
    } = req.body;

    const hocsinh = HocSinh.create({
        ten: ten,
        ngay_sinh: ngay_sinh
    })

    await hocsinh.save();

    return res.json(hocsinh);
});

export {
    router as themHocSinh
}