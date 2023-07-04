import express, { Request, Response } from 'express';
import { BaiKiemTra } from "../entities/baiKiemTra";
import { Diem } from "../entities/diem_ktra";
import { dataSource } from '../data-source';

export const layDanhSachHocSinh = async (req: Request, res: Response) => {
    try {

        const { bktraId } = req.params;

        let repo = dataSource.getRepository(BaiKiemTra)
        let repr2 = dataSource.getRepository(Diem)
        await repo.findOne({
            where: {
                id: parseInt(bktraId)
            }
        })

        if (bktraId != null) {
            //     // var id = Number(bktraId)
            //     // var a = await Diem.find({
            //     //     where: {
            //     //         baiktra: {
            //     //             id: Equal(id)
            //     //         }
            //     //     },
            //     //     relations:
            //     //     {
            //     //         baiktra: true
            //     //     }
            //     // })

            const lay_baiktra_id = await repr2.createQueryBuilder('d')
                .select('d.hocsinh')
                .where('d.baiktra = :bktraId', { bktraId })
                .getMany()

            return res.json(lay_baiktra_id)
        } else {
            return res.json({
                status: 'err',
                msg: 'ko tim thay bai ktra'
            })
        }

    } catch (error) {
        console.log(error)
        return res.json({
            status: 'err',
            msg: error.message
        })
    }
}