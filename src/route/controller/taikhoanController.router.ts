import express from "express";
import { taiKhoan } from "../TaiKhoan_route/taikhoan_route";
import { check } from "express-validator";

const router = express.Router();

router.post('/taikhoan', [
    check('tenDangNhap').trim().notEmpty().withMessage('ko duoc de trong ten dang nhap'),
    check('matKhau').trim().notEmpty().withMessage('ko duoc de trong mk'),
    check('role').trim().notEmpty().withMessage('ko duoc de trong role')
], taiKhoan);

export default router