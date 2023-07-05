import { Request, Response } from 'express';
import { BaiKiemTra } from "../../entities/baiKiemTra";
import { validationResult } from "express-validator";

export const xoaBaiKiemTra = async (req: Request, res: Response) => {
    try {
        const { baikiemtraId } = req.params;
        const error = validationResult(req)

        if (!error.isEmpty()) {
            return res.json({
                status: 'err',
                err: error.array()
            })
        } else {
            await BaiKiemTra.delete(parseInt(baikiemtraId))

            return res.json({
                status: 'oke',
                msg: 'xoa bai kiem tra thanh cong'
            })
        }

    } catch (error) {
        return res.json({
            status: 'err',
            msg: 'xoa bai kiem tra that bai '
        })
    }
}