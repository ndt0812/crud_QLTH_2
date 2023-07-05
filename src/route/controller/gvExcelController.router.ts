import express from "express";
import { exportGiaoVienExcel } from "../excel/giaovien_excel";
const { checkLogin, checkTea } = require('../../middleware/role')

const router = express.Router();

router.get('/giaovien/export', checkLogin, checkTea, exportGiaoVienExcel)

export default router