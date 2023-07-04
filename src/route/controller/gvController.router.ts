import express from "express";
import { suaGiaoVien } from "../giaovien_route/sua_giaovien";
import { themGiaoVien } from "../giaovien_route/them_giaovien";
import { xoaGiaoVien } from "../giaovien_route/xoa_giaovien";
const { checkLogin, checkAdm } = require('../../middleware/role')


const router = express.Router();

router.post('/giaovien', checkLogin, checkAdm, themGiaoVien)
router.put('/giaovien/:giaovienId', checkLogin, checkAdm, suaGiaoVien)
router.delete('/giaovien/:giaovienId', checkLogin, checkAdm, xoaGiaoVien)


export default router