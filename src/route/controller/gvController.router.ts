import express from "express";
import { suaGiaoVien } from "../giaovien_route/sua_giaovien";
import { themGiaoVien } from "../giaovien_route/them_giaovien";
import { xoaGiaoVien } from "../giaovien_route/xoa_giaovien";


const router = express.Router();

router.post('/giaovien', themGiaoVien)
router.put('/giaovien/:giaovienId', suaGiaoVien)
router.delete('/giaovien/:giaovienId', xoaGiaoVien)


export default router