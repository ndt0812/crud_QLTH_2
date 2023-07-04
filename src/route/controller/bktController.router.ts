import express from "express";
import { suaBaiKiemTra } from "../baikiemtra_route/sua_baikiemtra";
import { themBaiKiemTra } from "../baikiemtra_route/them_baikiemtra";
import { xoaBaiKiemTra } from "../baikiemtra_route/xoa_baikiemtra";
const { checkLogin, checkTea } = require('../../middleware/role')

const router = express.Router();

router.post('/baikiemtra', checkLogin, checkTea, themBaiKiemTra)
router.put('/baikiemtra/:baikiemtraId', checkLogin, checkTea, suaBaiKiemTra)
router.delete('/baikiemtra/:baikiemtraId', checkLogin, checkTea, xoaBaiKiemTra)


export default router