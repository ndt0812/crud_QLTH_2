import express from 'express';
import { GiaoVien } from '../../entities/giaoVien';

const router = express.Router();

router.post("/QLTH/giaovien", async (req, res) => {
    try {
        const {
            ten,
            so_nam_kinh_nghiem,
            monhoc
        } = req.body;

        const giaovien = GiaoVien.create({
            ten: ten,
            so_nam_kinh_nghiem: so_nam_kinh_nghiem,
            monhoc: monhoc
        })

        await giaovien.save();

        return res.json({
            status: 'oke, them giao vien thanh cong',
            msg: giaovien
        });
    } catch (error) {
        return res.json({
            status: 'err',
            msg: "them giao vien that bai"
        })
    }
});

export {
    router as themGiaoVien
}