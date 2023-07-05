import express from "express";
import { suaBaiKiemTra } from "../baikiemtra_route/sua_baikiemtra";
import { themBaiKiemTra } from "../baikiemtra_route/them_baikiemtra";
import { xoaBaiKiemTra } from "../baikiemtra_route/xoa_baikiemtra";
const { checkLogin, checkTea } = require('../../middleware/role')
import { check } from 'express-validator';


const router = express.Router();

router.post('/baikiemtra', [
    check("ten").trim().notEmpty().withMessage('vui long nhap ten bkt'),
    check("giaovien").notEmpty().withMessage('vui long nhap giao vien id').isNumeric().withMessage('giaovienid is only number')
], checkLogin, checkTea, themBaiKiemTra)


router.put('/baikiemtra/:baikiemtraId', [
    check("baikiemtraId").trim().notEmpty().withMessage('vui long nhap baikiemtraId').isNumeric().withMessage('baikiemtraId is only number'),
    check("ten").notEmpty().withMessage('vui long nhap ten bkt')
], checkLogin, checkTea, suaBaiKiemTra)


router.delete('/baikiemtra/:baikiemtraId', [
    check("baikiemtraId").trim().notEmpty().withMessage('vui long nhap baikiemtraId').isNumeric().withMessage('baikiemtraId is only number')
], checkLogin, checkTea, xoaBaiKiemTra)


export default router