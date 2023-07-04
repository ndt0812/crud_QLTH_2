import express from "express";
import { dangNhap } from "../TaiKhoan_route/dangnhap";

const router = express.Router();

router.get('/login', dangNhap);

export default router