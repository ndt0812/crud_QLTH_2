import express from "express";
import { exportHocSinhExcel } from "../excel/hocsinh_excel";
const { checkLogin, checkTea } = require('../../middleware/role')

const router = express.Router();

router.get('/hocsinh/export', checkLogin, checkTea, exportHocSinhExcel)

export default router