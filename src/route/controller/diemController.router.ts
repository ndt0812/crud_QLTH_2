import express from "express";
import { nhapDiem } from "../diem_ktra";
const { checkLogin, checkTea } = require('../../middleware/role')

const router = express.Router();

router.put('/bktra/:bktraId/hocsinh/:hocsinhId', checkLogin, checkTea, nhapDiem)

export default router