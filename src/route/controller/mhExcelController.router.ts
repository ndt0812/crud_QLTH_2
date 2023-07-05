import express from "express";
import { exportMonHocExcel } from "../excel/monhoc_excel";
const { checkLogin, checkTea } = require('../../middleware/role')

const router = express.Router();

router.get('/monhoc/export', checkLogin, checkTea, exportMonHocExcel)

export default router