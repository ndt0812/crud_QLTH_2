import express, { Request, Response } from 'express';
import { BaiKiemTra } from "../entities/baiKiemTra";
import { GiaoVien } from "../entities/giaoVien";
import { dataSource } from '../data-source';


export const layGiaoVien = async (req: Request, res: Response) => {
    try {
        let repo = dataSource.getRepository(GiaoVien)
        const id = await repo.createQueryBuilder("gv")
            .select("gv.id")
            .addSelect("gv.ten")
            //.addSelect("bkt.ten")
            .leftJoin(BaiKiemTra, "bkt", "gv.id = bkt.giaovien_id")
            .where("bkt.ten is null")
            .getRawMany()

        return res.json({
            status: "oke",
            msg: "danh sach giao vien chua co bkt:", id
        })
    } catch (error) {
        return res.json({
            status: 'err',
            msg: error.message
        })
    }
}