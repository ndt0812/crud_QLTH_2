import express from "express";
import { nhapDiem } from "../diem_ktra";

const router = express.Router();

router.put('/bktra/:bktraId/hocsinh/:hocsinhId', nhapDiem)

export default router