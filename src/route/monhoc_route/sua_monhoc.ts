import express from "express";
const { role } = require('../../middleware/role');
import { MonHoc } from "../../entities/monHoc";

const router = express.Router();

router.put("/QLTH/monhoc/:monhocId", role(['ADM']), async (req, res) => {
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
})

export { router as suaMonHoc }