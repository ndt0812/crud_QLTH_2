import express from 'express';
import { TaiKhoan } from '../../entities/taiKhoan';

const router = express.Router();

router.post("/QLTH/taikhoan", async (req, res) => {
    try {
        const {
            tenDangNhap,
            matKhau,
            role
        } = req.body;

        const taikhoan = TaiKhoan.create({
            tenDangNhap: tenDangNhap,
            matKhau: matKhau,
            role: role
        })

        await taikhoan.save();

        return res.json({
            status: 'oke, tao tai khoan thanh cong',
            msg: taikhoan
        });
    } catch (error) {
        return res.json({
            status: 'err',
            msg: "that bai"
        })
    }
});

export {
    router as taiKhoan
}