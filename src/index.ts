import express from 'express';
import { dataSource } from './data-source';
import hsControllerRouter from './route/controller/hsController.router';
import gvControllerRouter from './route/controller/gvController.router';
import mhControllerRouter from './route/controller/mhController.router';
import { trangThongTin } from './route/TaiKhoan_route/trangThongTin_route';
import bktControllerRouter from './route/controller/bktController.router';
import bktExcelControllerRouter from './route/controller/bktExcelController.router';
import dangnhapControllerRouter from './route/controller/dangnhapController.router';
import diemControllerRouter from './route/controller/diemController.router';
import getGvControllerRouter from './route/controller/getGvController.router';
import gvExcelControllerRouter from './route/controller/gvExcelController.router';
import hsExcelControllerRouter from './route/controller/hsExcelController.router';
import hs_bktRouter from './route/controller/hs_bkt.router';
import mhExcelControllerRouter from './route/controller/mhExcelController.router';
import taikhoanControllerRouter from './route/controller/taikhoanController.router';

var cookieParser = require('cookie-parser')

const app = express();

const main = async () => {
    try {
        await dataSource.initialize();
        console.log("ket noi toi Postgres thanh cogn")

        app.use(cookieParser())
        app.use(express.json())

        //hoc sinh
        app.use('/QLTH', hsControllerRouter)
        //giao vien
        app.use('/QLTH', gvControllerRouter)
        //mon hoc
        app.use('/QLTH', mhControllerRouter)
        //baikiemtra
        app.use('/QLTH', bktControllerRouter)
        //diem
        app.use('/QLTH', diemControllerRouter)
        //laydanhsach
        app.use('/QLTH', hs_bktRouter)
        app.use('/QLTH', getGvControllerRouter)
        //exportExcel
        app.use('/QLTH', hsExcelControllerRouter)
        app.use('/QLTH', gvExcelControllerRouter)
        app.use('/QLTH', bktExcelControllerRouter)
        app.use('/QLTH', mhExcelControllerRouter)
        //taikhoan
        app.use('/QLTH', taikhoanControllerRouter)
        app.use('/QLTH', dangnhapControllerRouter)
        app.use(trangThongTin)

        app.listen(3000, () => {
            console.log("chay tren port 3000")
        })

    } catch (error) {
        console.error(error)
        throw new Error("ko the ket noi toi postgres")
    }
}


main()