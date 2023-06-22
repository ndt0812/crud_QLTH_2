import express from 'express';
import { createConnection } from 'typeorm';
import { HocSinh } from './entities/hocSinh';
import { GiaoVien } from './entities/giaoVien';
import { MonHoc } from './entities/monHoc';
import { BaiKiemTra } from './entities/baiKiemTra';
import { themHocSinh } from './route/hocsinh_route/them_hocsinh';
import { xoaHocSinh } from './route/hocsinh_route/xoa_hocsinh';
import { suaHocSinh } from './route/hocsinh_route/sua_hocsinh';
import { themGiaoVien } from './route/giaovien_route/them_giaovien';
import { suaGiaoVien } from './route/giaovien_route/sua_giaovien';
import { xoaGiaoVien } from './route/giaovien_route/xoa_giaovien';
import { themMonHoc } from './route/monhoc_route/them_monhoc';
import { suaMonHoc } from './route/monhoc_route/sua_monhoc';
import { xoaMonHoc } from './route/monhoc_route/xoa_monhoc';
import { suaBaiKiemTra } from './route/baikiemtra_route/sua_baikiemtra';
import { themBaiKiemTra } from './route/baikiemtra_route/them_baikiemtra';
import { xoaBaiKiemTra } from './route/baikiemtra_route/xoa_baikiemtra';
import { Diem } from './entities/diem_ktra';
import { nhapDiem } from './route/diem_ktra';
import { layDanhSachHocSinh } from './route/lay_hocsinh_bktra';
import { layGiaoVien } from './route/lay_giaovien';
import { exportHocSinhExcel } from './route/excel/hocsinh_excel';
import { exportGiaoVienExcel } from './route/excel/giaovien_excel';
import { exportBaiKiemTraExcel } from './route/excel/baiktra_excel';
import { exportMonHocExcel } from './route/excel/monhoc_excel';

const app = express();

const main = async () => {
    try {
        await createConnection({
            type: "postgres",
            host: "db-devtest-pg.metatech.xyz",
            port: 5432,
            username: "sample",
            password: "tDmgxqFRUm92Q4URItpHdbJKPw4ex4DIdBLL4HQThvfhzUUJZ6",
            schema: "thang_db",
            database: "sample_db",
            entities: [HocSinh, GiaoVien, MonHoc, BaiKiemTra, Diem],
            synchronize: true
        })
        console.log("ket noi toi Postgres thanh cogn")

        app.use(express.json())
        //hoc sinh
        app.use(themHocSinh)
        app.use(xoaHocSinh)
        app.use(suaHocSinh)
        //giao vien
        app.use(themGiaoVien)
        app.use(suaGiaoVien)
        app.use(xoaGiaoVien)
        //mon hoc
        app.use(themMonHoc)
        app.use(suaMonHoc)
        app.use(xoaMonHoc)
        //baikiemtra
        app.use(suaBaiKiemTra)
        app.use(themBaiKiemTra)
        app.use(xoaBaiKiemTra)
        //diem
        app.use(nhapDiem)
        //laydanhsach
        app.use(layDanhSachHocSinh)
        app.use(layGiaoVien)
        //exportExcel
        app.use(exportHocSinhExcel)
        app.use(exportGiaoVienExcel)
        app.use(exportBaiKiemTraExcel)
        app.use(exportMonHocExcel)

        app.listen(3000, () => {
            console.log("chay tren port 3000")
        })

    } catch (error) {
        console.error(error)
        throw new Error("ko the ket noi toi postgres")
    }
}


main()