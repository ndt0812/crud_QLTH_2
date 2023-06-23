import express from 'express';
import { Diem } from '../entities/diem_ktra';
import { HocSinh } from '../entities/hocSinh';
import { BaiKiemTra } from '../entities/baiKiemTra';
const { role } = require('../middleware/role');


const router = express.Router();

router.put("/QLTH/bktra/:bktraId/hocsinh/:hocsinhId", role(['ADM']), async (req, res) => {
    try {
        const { diem, baiktra_id, hocsinh_id } = req.body;

        const { bktraId, hocsinhId } = req.params;

        const hocsinh = await HocSinh.findOne({
            where: { id: parseInt(bktraId) }
        })

        const bktra = await BaiKiemTra.findOne({
            where: { id: parseInt(hocsinhId) }
        })

        if (!hocsinh || !bktra) {
            return res.json({
                status: 'err',
                msg: "ko tim dc hocsinhid hoac bktraid "
            })
        }

        hocsinh.baiktra = [bktra]
        await bktra.save();

        const nhieu_diem = Diem.create({
            diem: diem,
            baiktra: baiktra_id,
            hocsinh: hocsinh_id
        })

        await nhieu_diem.save()

        return res.json({
            status: 'oke, nhap diem thanh cong',
            msg: nhieu_diem
        });
    } catch (error) {
        console.log(error)
        return res.json({
            status: 'err',
            msg: "nhap diem that bai"
        })
    }
});

export {
    router as nhapDiem
}