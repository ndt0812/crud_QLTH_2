import express from "express";
import { suaGiaoVien } from "../giaovien_route/sua_giaovien";
import { themGiaoVien } from "../giaovien_route/them_giaovien";
import { xoaGiaoVien } from "../giaovien_route/xoa_giaovien";
const { checkLogin, checkAdm } = require('../../middleware/role')
import { check } from "express-validator";


const router = express.Router();

router.post('/giaovien', checkLogin, checkAdm, [
    check("ten").trim().notEmpty().withMessage('vui long nhap ten giao vien'),
    check("so_nam_kinh_nghiem").trim().notEmpty().withMessage('vui long nhap so_nam_kinh_nghiem').isNumeric().withMessage('vui long nhap dung so nam kinh nghiem'),
    check("monhoc").trim().notEmpty().withMessage('vui long nhap monhoc').isNumeric().withMessage('vui long nhap id mon hoc'),
], themGiaoVien)

router.put('/giaovien/:giaovienId', checkLogin, checkAdm, [
    check("ten").trim().notEmpty().withMessage('vui long nhap ten giao vien'),
    check("so_nam_kinh_nghiem").trim().notEmpty().withMessage('vui long nhap so_nam_kinh_nghiem').isNumeric().withMessage('vui long nhap dung so nam kinh nghiem'),
    check('giaovienId').trim().isNumeric().withMessage('giaovienId is only number')
], suaGiaoVien)

router.delete('/giaovien/:giaovienId', checkLogin, checkAdm, [
    check('giaovienId').isNumeric().withMessage('vui long nhap dung giaovienId')
], xoaGiaoVien)


export default router