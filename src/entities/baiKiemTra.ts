import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { HocSinh } from "./hocSinh";
import { GiaoVien } from "./giaoVien";
import { Diem } from "./diem_ktra";

@Entity('BaiKiemTra')
export class BaiKiemTra extends BaseEntity {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ type: 'varchar', length: 255 })
    ten: string;

    @ManyToOne(() => GiaoVien, (giaovien) => giaovien.nhieu_baiktra)
    @JoinColumn({ name: "giaovien_id" })
    giaovien: GiaoVien;

    @OneToMany(() => Diem, (nhieu_diem) => nhieu_diem.baiktra)
    nhieu_diem: Diem[];

    @ManyToMany(() => HocSinh)
    hocsinh: HocSinh[];
}