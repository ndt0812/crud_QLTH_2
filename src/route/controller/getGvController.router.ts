import express from "express";
import { layGiaoVien } from "../lay_giaovien";
const { checkLogin, checkAdm } = require('../../middleware/role')

const router = express.Router();

router.get('/laygiaovien', checkLogin, checkAdm, layGiaoVien)

export default router