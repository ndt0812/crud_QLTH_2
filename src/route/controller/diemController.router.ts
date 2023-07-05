import express from "express";
import { nhapDiem } from "../diem_ktra";
import { check } from "express-validator";
const { checkLogin, checkTea } = require('../../middleware/role')

const router = express.Router();

router.post('/bktra/hocsinh', [
    check("baiktra_id").trim().notEmpty().withMessage('vui long nhap bai kiemtraid'),
    check("diem").trim().notEmpty().withMessage('vui long nhap diem').isInt({ min: 0, max: 10 }).withMessage('vui long nhap dung diem'),
    check("hocsinh_id").trim().notEmpty().withMessage('vui long nhap bai hocsinh_id')
], checkLogin, checkTea, nhapDiem)

export default router