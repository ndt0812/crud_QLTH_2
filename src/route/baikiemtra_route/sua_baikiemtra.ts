import express, { Request, Response } from 'express';
import { BaiKiemTra } from "../../entities/baiKiemTra";

export const suaBaiKiemTra = async (req: Request, res: Response) => {
    try {
        const { baikiemtraId } = req.params;
        const baikiemtra = req.body;

        const new_baikiemtra = await BaiKiemTra.findOne({
            where: { id: parseInt(baikiemtraId) }
        })
        if (!new_baikiemtra) {
            throw new Error(" ko tim thay bai kiem tra de update")
        }
        new_baikiemtra.ten = baikiemtra.ten;

        await new_baikiemtra.save();

        return res.json({
            status: 'oke',
            msg: 'sua bai kiem tra thanh cong'
        })
    } catch (error) {
        return res.json({
            status: 'err',
            msg: 'sua bai kiem tra that bai '
        })
    }
}