import express from "express";
import { themHocSinh } from "../hocsinh_route/them_hocsinh";
import { suaHocSinh } from "../hocsinh_route/sua_hocsinh";
import { xoaHocSinh } from "../hocsinh_route/xoa_hocsinh";
const { checkLogin, checkTea } = require('../../middleware/role')
import { check } from "express-validator";

const router = express.Router();

router.post('/hocsinh', checkLogin, checkTea, [
    check('ten').trim().notEmpty().withMessage('vui long nhap ten hoc sinh'),
    check('ngay_sinh').trim().notEmpty().withMessage('vui long nhap ngay sinh').isDate({ format: 'YYYY-MM-DD' }).withMessage('vui long nhap dung date')
], themHocSinh)

router.put('/hocsinh/:hocsinhId', checkLogin, checkTea, [
    check('ten').trim().notEmpty().withMessage('vui long nhap ten hoc sinh'),
    check('ngay_sinh').trim().notEmpty().withMessage('vui long nhap ngay sinh').isDate({ format: 'YYYY-MM-DD' }).withMessage('vui long nhap dung date'),
    check("hocsinhId").trim().isNumeric().withMessage('vui long nhap dung hoc sinh id')
], suaHocSinh)

router.delete('/hocsinh/:hocsinhId', checkLogin, checkTea, [
    check("hocsinhId").trim().isNumeric().withMessage('vui long nhap dung hoc sinh id')
], xoaHocSinh)


export default router