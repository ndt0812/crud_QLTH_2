import express from "express";
import { suaMonHoc } from "../monhoc_route/sua_monhoc";
import { themMonHoc } from "../monhoc_route/them_monhoc";
import { xoaMonHoc } from "../monhoc_route/xoa_monhoc";

const router = express.Router();

router.post('/monhoc', themMonHoc)
router.put('/monhoc/:monhocId', suaMonHoc)
router.delete('/monhoc/:monhocId', xoaMonHoc)


export default router