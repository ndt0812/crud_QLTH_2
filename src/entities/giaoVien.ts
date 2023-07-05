import { Entity, Column, ManyToOne, JoinColumn, OneToMany, PrimaryGeneratedColumn, BaseEntity } from "typeorm";
import { MonHoc } from "./monHoc";
import { BaiKiemTra } from "./baiKiemTra";

@Entity('GiaoVien')
export class GiaoVien extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    ten: string;

    @Column({ type: "numeric" })
    so_nam_kinh_nghiem: number;

    @OneToMany(() => BaiKiemTra, (nhieu_baiktra) => nhieu_baiktra.giaovien)
    nhieu_baiktra: BaiKiemTra[]

    @ManyToOne(() => MonHoc, (monhoc) => monhoc.nhieu_giaovien, { onDelete: "CASCADE" })
    @JoinColumn({ name: 'monhoc_id' })
    monhoc: MonHoc;
}