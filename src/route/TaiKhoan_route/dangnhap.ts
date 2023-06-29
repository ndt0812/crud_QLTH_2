import express from 'express';
import { TaiKhoan } from '../../entities/taiKhoan';
let jwt = require("jsonwebtoken");

const router = express.Router();

router.get("/QLTH/login", async (req, res) => {
    try {
        let tenDangNhap = req.body.tenDangNhap;
        let matKhau = req.body.matKhau;

        const taikhoan = await TaiKhoan.findOne({
            where: {
                tenDangNhap: tenDangNhap,
                matKhau: matKhau
            }
        })

        if (taikhoan) {
            let token = jwt.sign({
                id: taikhoan.id
            }, 'bimat')
            return res.json({
                status: 'oke, dang nhap thanh cong',
                token: token
            });
        }


    } catch (error) {
        return res.json({
            status: 'err',
            msg: "that bai"
        })
    }
});

export {
    router as dangNhap
}