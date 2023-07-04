import express from "express";
import { taiKhoan } from "../TaiKhoan_route/taikhoan_route";

const router = express.Router();

router.get('/taikhoan', taiKhoan);

export default router