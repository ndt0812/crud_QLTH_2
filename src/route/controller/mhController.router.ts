import express from "express";
import { suaMonHoc } from "../monhoc_route/sua_monhoc";
import { themMonHoc } from "../monhoc_route/them_monhoc";
import { xoaMonHoc } from "../monhoc_route/xoa_monhoc";
const { checkLogin, checkTea } = require('../../middleware/role')

const router = express.Router();

router.post('/monhoc', checkLogin, checkTea, themMonHoc)
router.put('/monhoc/:monhocId', checkLogin, checkTea, suaMonHoc)
router.delete('/monhoc/:monhocId', checkLogin, checkTea, xoaMonHoc)


export default router