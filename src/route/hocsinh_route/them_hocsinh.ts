import { Request, Response } from 'express';
import { HocSinh } from '../../entities/hocSinh';

export const themHocSinh = async (req: Request, res: Response) => {
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
};
