import { Request, Response, NextFunction } from 'express';
import { TaiKhoan } from '../../entities/taiKhoan';
import { dataSource } from '../../data-source';
import { validationResult } from "express-validator";

export const taiKhoan = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {
            tenDangNhap,
            matKhau,
            role
        } = req.body;
        let repo = dataSource.getRepository(TaiKhoan)
        const error = validationResult(req)

        if (!error.isEmpty()) {
            return res.json({
                status: 'err',
                err: error.array()
            })
        } else {
            const taikhoan = repo.create({
                tenDangNhap: tenDangNhap,
                matKhau: matKhau,
                role: role
            })

            await taikhoan.save();

            return res.json({
                status: 'oke, tao tai khoan thanh cong',
                msg: taikhoan
            });
        }

    } catch (error) {
        return res.json({
            status: 'err',
            msg: "that bai"
        })
    }
}