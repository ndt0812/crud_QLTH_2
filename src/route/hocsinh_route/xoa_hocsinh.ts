import express, { Request, Response } from 'express';
import { HocSinh } from "../../entities/hocSinh";


export const xoaHocSinh = async (req: Request, res: Response) => {
    try {
        const { hocsinhId } = req.params;

        await HocSinh.delete(parseInt(hocsinhId))

        return res.json({
            status: 'oke',
            msg: 'xoa hoc sinh thanh cong'
        })
    } catch (error) {
        return res.json({
            status: 'err',
            msg: 'xoa hoc sinh that bai '
        })
    }
}

