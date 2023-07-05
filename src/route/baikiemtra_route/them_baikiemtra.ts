import { Request, Response } from 'express';
import { BaiKiemTra } from '../../entities/baiKiemTra';
import { validationResult } from "express-validator";

export const themBaiKiemTra = async (req: Request, res: Response) => {
    try {
        const { ten, giaovien } = req.body;
        const error = validationResult(req)

        if (!error.isEmpty()) {
            return res.json({
                status: 'err',
                err: error.array()
            })

        } else {
            const baikiemtra = BaiKiemTra.create({
                ten: ten,
                giaovien: giaovien
            })

            await baikiemtra.save();

            return res.json({
                status: 'oke, them bai kiem tra thanh cong',
                msg: baikiemtra
            });
        }

    } catch (error) {
        return res.json({
            status: 'err',
            msg: "them bai kiem tra that bai"
        })
    }
}