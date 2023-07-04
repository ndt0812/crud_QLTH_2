import express from "express";
import { themHocSinh } from "../hocsinh_route/them_hocsinh";
import { suaHocSinh } from "../hocsinh_route/sua_hocsinh";
import { xoaHocSinh } from "../hocsinh_route/xoa_hocsinh";
const { checkLogin, checkTea } = require('../../middleware/role')

const router = express.Router();

router.post('/hocsinh', checkLogin, checkTea, themHocSinh)
router.put('/hocsinh/:hocsinhId', checkLogin, checkTea, suaHocSinh)
router.delete('/hocsinh/:hocsinhId', checkLogin, checkTea, xoaHocSinh)


export default router