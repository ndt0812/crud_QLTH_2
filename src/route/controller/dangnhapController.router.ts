import express from "express";
import { dangNhap } from "../TaiKhoan_route/dangnhap";
import { check } from "express-validator";

const router = express.Router();

router.get('/login', [
    check("tenDangNhap").trim().notEmpty().withMessage('vui long nhap ten dang nhap'),
    check("matKhau").trim().notEmpty().withMessage('vui long nhap mat khau').isLength({ min: 6 }).withMessage('mat khau toi thieu phai co 6 ky tu')
], dangNhap);

export default router