import express from 'express';
import { createConnection } from 'typeorm';
import { HocSinh } from './entities/hocSinh';
import { GiaoVien } from './entities/giaoVien';
import { MonHoc } from './entities/monHoc';
import { BaiKiemTra } from './entities/baiKiemTra';
import { Diem } from './entities/diem_ktra';
import { layDanhSachHocSinh } from './route/lay_hocsinh_bktra';
import { layGiaoVien } from './route/lay_giaovien';
import { exportHocSinhExcel } from './route/excel/hocsinh_excel';
import { exportGiaoVienExcel } from './route/excel/giaovien_excel';
import { exportBaiKiemTraExcel } from './route/excel/baiktra_excel';
import { exportMonHocExcel } from './route/excel/monhoc_excel';
import { TaiKhoan } from './entities/taiKhoan';
import { taiKhoan } from './route/TaiKhoan_route/taikhoan_route';
import { dangNhap } from './route/TaiKhoan_route/dangnhap';
import { trangThongTin } from './route/TaiKhoan_route/trangThongTin_route';
import hsControllerRouter from './route/controller/hsController.router';
import gvControllerRouter from './route/controller/gvController.router';
import mhControllerRouter from './route/controller/mhController.router';
import bktControllerRouter from './route/controller/bktController.router';
import diemControllerRouter from './route/controller/diemController.router';
import { dataSource } from './data-source';

const app = express();

const main = async () => {
    try {
        await dataSource.initialize();
        console.log("ket noi toi Postgres thanh cogn")

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
        app.use(layDanhSachHocSinh)
        app.use(layGiaoVien)
        //exportExcel
        app.use(exportHocSinhExcel)
        app.use(exportGiaoVienExcel)
        app.use(exportBaiKiemTraExcel)
        app.use(exportMonHocExcel)
        //taikhoan
        app.use(taiKhoan)
        app.use(dangNhap)
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