import { Entity, Column, ManyToMany, OneToMany, JoinTable, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn } from "typeorm";
import { BaiKiemTra } from "./baiKiemTra";
import { MonHoc } from "./monHoc";
import { Diem } from "./diem_ktra";


@Entity('HocSinh')
export class HocSinh extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    ten: string;

    @CreateDateColumn({ nullable: true, default: () => "timezone('utc'::text,now())", })
    ngay_sinh: Date;

    @ManyToMany(() => MonHoc)
    @JoinTable({
        name: "hocsinh_monhoc",
        joinColumn: { name: 'hocsinh_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'monhoc_id', referencedColumnName: 'id' }
    })
    monhoc: MonHoc[];

    @OneToMany(() => Diem, (nhieu_diem) => nhieu_diem.hocsinh)
    nhieu_diem: Diem[];

    @ManyToMany(() => BaiKiemTra)
    @JoinTable({
        name: "Diem",
        joinColumn: { name: 'hocsinh_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'baiktra_id', referencedColumnName: 'id' }
    })
    baiktra: BaiKiemTra[];
}