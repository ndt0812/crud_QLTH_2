import { DataSource } from "typeorm";
import { HocSinh } from "./entities/hocSinh";
import { GiaoVien } from "./entities/giaoVien";
import { MonHoc } from "./entities/monHoc";
import { BaiKiemTra } from "./entities/baiKiemTra";
import { Diem } from "./entities/diem_ktra";
import { TaiKhoan } from "./entities/taiKhoan";

export const dataSource = new DataSource({
    type: "postgres",
    host: "db-devtest-pg.metatech.xyz",
    port: 5432,
    username: "sample",
    password: "tDmgxqFRUm92Q4URItpHdbJKPw4ex4DIdBLL4HQThvfhzUUJZ6",
    schema: "thang_db",
    database: "sample_db",
    entities: [HocSinh, GiaoVien, MonHoc, BaiKiemTra, Diem, TaiKhoan],
    synchronize: true
})