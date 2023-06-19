import express from 'express';
import { createConnection } from 'typeorm';
import { HocSinh } from './entities/hocSinh';
import { GiaoVien } from './entities/giaoVien';
import { MonHoc } from './entities/monHoc';
import { BaiKiemTra } from './entities/baiKiemTra';
import { themHocSinh } from './route/them_hocsinh';

const app = express();

const main = async () => {
    try {
        await createConnection({
            type:"postgres",
            host:"db-devtest-pg.metatech.xyz",
            port: 5432,
            username: "sample",
            password: "tDmgxqFRUm92Q4URItpHdbJKPw4ex4DIdBLL4HQThvfhzUUJZ6",
            schema: "thang_db",
            database: "sample_db",
            entities: [HocSinh, GiaoVien, MonHoc, BaiKiemTra],
            synchronize: true
        })
        console.log("ket noi toi Postgres thanh cogn")

        app.use(express.json())
        app.use(themHocSinh)

        app.listen(3000, () => {
            console.log("chay tren port 3000")
        })
    } catch (error) {
        console.error(error)
        throw new Error("ko the ket noi toi postgres")
    }
}

main()