import { Request, Response } from 'express';
import { Diem } from '../entities/diem_ktra';
import { HocSinh } from '../entities/hocSinh';
import { BaiKiemTra } from '../entities/baiKiemTra';
import { dataSource } from '../data-source';
import { validationResult } from "express-validator";

export const nhapDiem = async (req: Request, res: Response) => {
    try {
        const { baiktra_id, diem, hocsinh_id } = req.body;
        const error = validationResult(req)

        if (!error.isEmpty()) {
            return res.json({
                status: 'err',
                err: error.array()
            })
        } else {
            var repo = dataSource.getRepository(HocSinh);
            const hocsinh = await repo.findOne({
                where: { id: parseInt(hocsinh_id) }
            })

            const bktra = await BaiKiemTra.findOne({
                where: { id: parseInt(baiktra_id) }
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
        }

    } catch (error) {
        console.log(error)
        return res.json({
            status: 'err',
            msg: "nhap diem that bai"
        })
    }
}