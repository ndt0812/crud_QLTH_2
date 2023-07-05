import { Request, Response } from 'express';
import { HocSinh } from '../../entities/hocSinh';
import { validationResult } from "express-validator";

export const themHocSinh = async (req: Request, res: Response) => {
    try {
        const {
            ten,
            ngay_sinh
        } = req.body;
        const error = validationResult(req)
        if (!error.isEmpty()) {
            return res.json({
                status: 'err',
                err: error.array()
            })
        } else {
            const hocsinh = HocSinh.create({
                ten: ten,
                ngay_sinh: ngay_sinh
            })

            await hocsinh.save();

            return res.json({
                status: 'oke, them hoc sinh thanh cong',
                msg: hocsinh
            });
        }

    } catch (error) {
        return res.json({
            status: 'err',
            msg: error.message
        })
    }
};
