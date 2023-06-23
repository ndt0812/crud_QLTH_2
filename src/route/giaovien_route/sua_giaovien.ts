import express from "express";
import { GiaoVien } from "../../entities/giaoVien";
const { role } = require('../../middleware/role');

const router = express.Router();

router.put("/QLTH/giaovien/:giaovienId", role(['ADM']), async (req, res) => {
    try {
        const { giaovienId } = req.params;
        const giaovien = req.body;

        const new_giaovien = await GiaoVien.findOne({
            where: { id: parseInt(giaovienId) }
        })
        if (!new_giaovien) {
            throw new Error(" ko tim thay giao vien de update")
        }
        new_giaovien.ten = giaovien.ten;
        new_giaovien.so_nam_kinh_nghiem = giaovien.so_nam_kinh_nghiem;

        await new_giaovien.save();

        return res.json({
            status: 'oke',
            msg: 'sua giao vien thanh cong'
        })
    } catch (error) {
        return res.json({
            status: 'err',
            msg: 'sua giao vien that bai '
        })
    }
})

export { router as suaGiaoVien }