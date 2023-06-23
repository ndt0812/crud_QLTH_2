import express from 'express';
import { HocSinh } from '../../entities/hocSinh';
const { role } = require('../../middleware/role');

const router = express.Router();

router.post("/QLTH/hocsinh", role(['ADM']), async (req, res) => {
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
            msg: error.message
        })
    }
});

export {
    router as themHocSinh
}