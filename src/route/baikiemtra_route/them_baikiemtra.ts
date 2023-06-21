import express from 'express';
import { BaiKiemTra } from '../../entities/baiKiemTra';

const router = express.Router();

router.post("/QLTH/baikiemtra", async (req, res) => {
    try {
        const {
            ten,
            giaovien
        } = req.body;

        const baikiemtra = BaiKiemTra.create({
            ten: ten,
            giaovien: giaovien
        })

        await baikiemtra.save();

        return res.json({
            status: 'oke, them bai kiem tra thanh cong',
            msg: baikiemtra
        });
    } catch (error) {
        return res.json({
            status: 'err',
            msg: "them bai kiem tra that bai"
        })
    }
});

export {
    router as themBaiKiemTra
}