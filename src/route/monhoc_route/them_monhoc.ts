import express, { Request, Response } from 'express';
import { MonHoc } from '../../entities/monHoc';

export const themMonHoc = async (req: Request, res: Response) => {
    try {
        const {
            ten,
        } = req.body;

        const monhoc = MonHoc.create({
            ten: ten,
        })

        await monhoc.save();

        return res.json({
            status: 'oke, them mon hoc thanh cong',
            msg: monhoc
        });
    } catch (error) {
        return res.json({
            status: 'err',
            msg: "them mon hoc that bai"
        })
    }
}