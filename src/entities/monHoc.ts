import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { GiaoVien } from "./giaoVien";
import { HocSinh } from "./hocSinh";


@Entity('MonHoc')
export class MonHoc extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    ten: string;

    @ManyToMany(() => HocSinh, { cascade: true })
    hocsinh: HocSinh[]

    @OneToMany(() => GiaoVien, (nhieu_giaovien) => nhieu_giaovien.monhoc)
    nhieu_giaovien: GiaoVien;
}