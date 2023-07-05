import { Request, Response } from 'express';
import { GiaoVien } from "../../entities/giaoVien";
import { validationResult } from "express-validator";

export const xoaGiaoVien = async (req: Request, res: Response) => {
    try {
        const { giaovienId } = req.params;
        const error = validationResult(req)

        if (!error.isEmpty()) {
            return res.json({
                status: 'err',
                err: error.array()
            })
        } else {
            await GiaoVien.delete(parseInt(giaovienId))

            return res.json({
                status: 'oke',
                msg: 'xoa giao vien thanh cong'
            })
        }

    } catch (error) {
        return res.json({
            status: 'err',
            msg: 'xoa giao vien that bai '
        })
    }
}