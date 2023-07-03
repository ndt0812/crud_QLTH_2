import express from "express";
import { suaBaiKiemTra } from "../baikiemtra_route/sua_baikiemtra";
import { themBaiKiemTra } from "../baikiemtra_route/them_baikiemtra";
import { xoaBaiKiemTra } from "../baikiemtra_route/xoa_baikiemtra";

const router = express.Router();

router.post('/baikiemtra', themBaiKiemTra)
router.put('/baikiemtra/:baikiemtraId', suaBaiKiemTra)
router.delete('/baikiemtra/:baikiemtraId', xoaBaiKiemTra)


export default router