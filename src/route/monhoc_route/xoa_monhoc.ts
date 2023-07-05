import express, { Request, Response } from 'express';
import { MonHoc } from "../../entities/monHoc";
import { validationResult } from "express-validator";

export const xoaMonHoc = async (req: Request, res: Response) => {
    try {
        const { monhocId } = req.params;
        const error = validationResult(req)
        if (!error.isEmpty()) {
            return res.json({
                status: 'err',
                err: error.array()
            })
        } else {
            await MonHoc.delete(parseInt(monhocId))

            return res.json({
                status: 'oke',
                msg: 'xoa mon hoc thanh cong'
            })
        }
    } catch (error) {
        return res.json({
            status: 'err',
            msg: 'xoa mon hoc that bai '
        })
    }
}