import express, { Request, Response } from 'express';
import { GiaoVien } from "../../entities/giaoVien";

export const xoaGiaoVien = async (req: Request, res: Response) => {
    try {
        const { giaovienId } = req.params;

        await GiaoVien.delete(parseInt(giaovienId))

        return res.json({
            status: 'oke',
            msg: 'xoa giao vien thanh cong'
        })
    } catch (error) {
        return res.json({
            status: 'err',
            msg: 'xoa giao vien that bai '
        })
    }
}