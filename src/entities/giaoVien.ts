import { Entity,Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Person } from "./utils/person";
import { MonHoc } from "./monHoc";
import { BaiKiemTra } from "./baiKiemTra";

@Entity('GiaoVien')
export class GiaoVien extends Person {
    @Column({
        type: "numeric"
    })
    so_nam_kinh_nghiem: number;

    @Column({
        unique: true
    })
    mon_day: string;

    @ManyToOne(
        () => MonHoc,
        monhoc => monhoc.giaoviens
    )

    @JoinColumn({
        name: 'monhoc_id'
    })
    monhoc: MonHoc

    @OneToMany(
        () => BaiKiemTra,
        baikiemtra => baikiemtra.giaoviens
    )
    baikiemtra: BaiKiemTra[]
}