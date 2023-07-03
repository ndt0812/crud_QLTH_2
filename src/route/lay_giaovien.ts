import express from "express";
import { BaiKiemTra } from "../entities/baiKiemTra";
import { GiaoVien } from "../entities/giaoVien";
import { createQueryBuilder } from "typeorm";
const { role } = require('../middleware/role');


const router = express.Router();

router.get('/QLTH/laygiaovien', async (req, res) => {
    try {
        const id = await createQueryBuilder(GiaoVien, "gv")
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
})

export { router as layGiaoVien }