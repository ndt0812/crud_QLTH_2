import express from "express";
import { themHocSinh } from "../hocsinh_route/them_hocsinh";
import { suaHocSinh } from "../hocsinh_route/sua_hocsinh";
import { xoaHocSinh } from "../hocsinh_route/xoa_hocsinh";

const router = express.Router();

router.post('/hocsinh', themHocSinh)
router.put('/hocsinh/:hocsinhId', suaHocSinh)
router.delete('/hocsinh/:hocsinhId', xoaHocSinh)


export default router