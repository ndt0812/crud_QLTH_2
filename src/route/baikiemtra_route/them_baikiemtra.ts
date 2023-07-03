import express, { Request, Response } from 'express';
import { BaiKiemTra } from '../../entities/baiKiemTra';

export const themBaiKiemTra = async (req: Request, res: Response) => {
    try {
        const {
            ten,
            giaovien
        } = req.body;

        const baikiemtra = BaiKiemTra.create({
            ten: ten,
            giaovien: giaovien
        })

        await baikiemtra.save();

        return res.json({
            status: 'oke, them bai kiem tra thanh cong',
            msg: baikiemtra
        });
    } catch (error) {
        return res.json({
            status: 'err',
            msg: "them bai kiem tra that bai"
        })
    }
}