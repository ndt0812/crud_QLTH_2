import express from "express";
import { MonHoc } from "../../entities/monHoc";
const { role } = require('../../middleware/role');

const router = express.Router();

router.delete("/QLTH/monhoc/:monhocId", role(['ADM']), async (req, res) => {
    try {
        const { monhocId } = req.params;

        await MonHoc.delete(parseInt(monhocId))

        return res.json({
            status: 'oke',
            msg: 'xoa mon hoc thanh cong'
        })
    } catch (error) {
        return res.json({
            status: 'err',
            msg: 'xoa mon hoc that bai '
        })
    }
})

export { router as xoaMonHoc }