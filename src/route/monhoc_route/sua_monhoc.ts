import express, { Request, Response } from 'express';
import { MonHoc } from "../../entities/monHoc";

export const suaMonHoc = async (req: Request, res: Response) => {
    try {
        const { monhocId } = req.params;
        const monhoc = req.body;

        const new_monhoc = await MonHoc.findOne({
            where: { id: parseInt(monhocId) }
        })
        if (!new_monhoc) {
            throw new Error(" ko tim thay mon hoc de update")
        }
        new_monhoc.ten = monhoc.ten;

        await new_monhoc.save();

        return res.json({
            status: 'oke',
            msg: 'sua mon hoc thanh cong'
        })
    } catch (error) {
        return res.json({
            status: 'err',
            msg: 'sua mon hoc that bai '
        })
    }
}