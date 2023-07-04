import { Request, Response, NextFunction } from 'express';
import { TaiKhoan } from '../../entities/taiKhoan';
import { dataSource } from '../../data-source';
let jwt = require("jsonwebtoken");

export const dangNhap = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let tenDangNhap = req.body.tenDangNhap;
        let matKhau = req.body.matKhau;
        let repo = dataSource.getRepository(TaiKhoan)

        const taikhoan = await repo.findOne({
            where: {
                tenDangNhap: tenDangNhap,
                matKhau: matKhau
            }
        })

        if (taikhoan) {
            let token = jwt.sign({ id: taikhoan.id }, 'bimat');

            res.cookie('token', token)

            return res.json({
                status: "dang nhap thanh cong, xin chao ban ",
                token: token
            });
        }

    } catch (error) {
        return res.json({
            status: 'err',
            msg: "that bai"
        })
    }
};
