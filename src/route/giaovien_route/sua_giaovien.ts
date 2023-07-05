import { Request, Response } from 'express';
import { GiaoVien } from "../../entities/giaoVien";
import { validationResult } from "express-validator";

export const suaGiaoVien = async (req: Request, res: Response) => {
    try {
        const { giaovienId } = req.params;
        const { ten, so_nam_kinh_nghiem, monhoc } = req.body;
        const error = validationResult(req)

        if (!error.isEmpty()) {
            return res.json({
                status: 'err',
                err: error.array()
            })
        } else {
            const new_giaovien = await GiaoVien.findOne({
                where: { id: parseInt(giaovienId) }
            })
            if (!new_giaovien) {
                throw new Error(" ko tim thay giao vien de update")
            }
            new_giaovien.ten = ten;
            new_giaovien.so_nam_kinh_nghiem = so_nam_kinh_nghiem;
            new_giaovien.monhoc = monhoc;

            await new_giaovien.save();

            return res.json({
                status: 'oke',
                msg: 'sua giao vien thanh cong'
            })
        }

    } catch (error) {
        return res.json({
            status: 'err',
            msg: 'sua giao vien that bai '
        })
    }
}

