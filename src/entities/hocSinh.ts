import { Entity,Column, ManyToMany } from "typeorm";
import { Person } from "./utils/person";
import { BaiKiemTra } from "./baiKiemTra";
import { MonHoc } from "./monHoc";

@Entity('HocSinh')
export class HocSinh extends Person {
    @Column({
        type: "date",
        nullable:true
    })
    ngay_sinh: Date | null;

    @ManyToMany(
        () => BaiKiemTra,
    )
    baikiemtras: BaiKiemTra[]

    @ManyToMany(
        () => MonHoc,
        {
            cascade: true
        }
    )
    monhoc: MonHoc[]
}