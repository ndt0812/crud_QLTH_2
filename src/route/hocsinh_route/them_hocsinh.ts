import express from 'express';
import { HocSinh } from '../../entities/hocSinh';

const router = express.Router();

router.post("/QLTH/hocsinh", async (req,res) => {
    try {
        const {
            ten,
            ngay_sinh
        } = req.body;
    
        const hocsinh = HocSinh.create({
            ten: ten,
            ngay_sinh: ngay_sinh
        })
    
        await hocsinh.save();
    
        return res.json({
            status: 'oke, them hoc sinh thanh cong',
            msg: hocsinh
        });
    } catch (error) {
        return res.json({
            status: 'err',
            msg: "them hoc sinh that bai"
        })
    }
});

export {
    router as themHocSinh
}