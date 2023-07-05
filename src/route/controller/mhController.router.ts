import express from "express";
import { suaMonHoc } from "../monhoc_route/sua_monhoc";
import { themMonHoc } from "../monhoc_route/them_monhoc";
import { xoaMonHoc } from "../monhoc_route/xoa_monhoc";
const { checkLogin, checkTea } = require('../../middleware/role')
import { check } from "express-validator";

const router = express.Router();

router.post('/monhoc', checkLogin, checkTea, [
    check('ten').trim().notEmpty().withMessage('vui long nhap mon hoc')
], themMonHoc)

router.put('/monhoc/:monhocId', checkLogin, checkTea, [
    check('ten').trim().notEmpty().withMessage('vui long nhap mon hoc')
], suaMonHoc)

router.delete('/monhoc/:monhocId', checkLogin, checkTea, [
    check('monhocId').trim().isNumeric().withMessage('monhocId is only number')
], xoaMonHoc)


export default router