import express from "express";
import { exportBaiKiemTraExcel } from "../excel/baiktra_excel";
const { checkLogin, checkTea } = require('../../middleware/role')

const router = express.Router();

router.get('/bkt/export', checkLogin, checkTea, exportBaiKiemTraExcel)

export default router