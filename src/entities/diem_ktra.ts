import { Entity, Column, BaseEntity, ManyToOne, JoinColumn, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";
import { HocSinh } from "./hocSinh";
import { BaiKiemTra } from "./baiKiemTra";


@Entity('Diem')
export class Diem extends BaseEntity {

    @PrimaryColumn("int4", { name: 'baiktra_id' })
    @ManyToOne(() => BaiKiemTra, (baiktra) => baiktra.nhieu_diem, { nullable: false })
    @JoinColumn({ name: 'baiktra_id' })
    baiktra: BaiKiemTra;

    @PrimaryColumn("int4", { name: 'hocsinh_id' })
    @ManyToOne(() => HocSinh, (hocsinh) => hocsinh.nhieu_diem, { nullable: false })
    @JoinColumn({ name: 'hocsinh_id' })
    hocsinh: HocSinh;


    @Column({ type: 'int4', nullable: true })
    diem: number;
}