import express from "express";
import { layDanhSachHocSinh } from "../lay_hocsinh_bktra";
const { checkLogin, checkStu } = require('../../middleware/role')

const router = express.Router();

router.get('/layhocsinh/:bktraId', checkLogin, checkStu, layDanhSachHocSinh)

export default router