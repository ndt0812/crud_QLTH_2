import express, { Request, Response } from 'express';
import { BaiKiemTra } from "../../entities/baiKiemTra";

export const xoaBaiKiemTra = async (req: Request, res: Response) => {
    try {
        const { baikiemtraId } = req.params;

        await BaiKiemTra.delete(parseInt(baikiemtraId))

        return res.json({
            status: 'oke',
            msg: 'xoa bai kiem tra thanh cong'
        })
    } catch (error) {
        return res.json({
            status: 'err',
            msg: 'xoa bai kiem tra that bai '
        })
    }
}