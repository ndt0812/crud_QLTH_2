import express from 'express';
import { MonHoc } from '../../entities/monHoc';

const router = express.Router();

router.post("/QLTH/monhoc", async (req,res) => {
    try {
        const {
            ten,
        } = req.body;
    
        const monhoc = MonHoc.create({
            ten: ten,
        })
    
        await monhoc.save();
    
        return res.json({
            status: 'oke, them mon hoc thanh cong',
            msg: monhoc
        });
    } catch (error) {
        return res.json({
            status: 'err',
            msg: "them mon hoc that bai"
        })
    }
});

export {
    router as themMonHoc
}