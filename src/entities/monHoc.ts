import { Entity,BaseEntity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { GiaoVien } from "./giaoVien";
import { HocSinh } from "./hocSinh";


@Entity('MonHoc')
export class MonHoc extends BaseEntity {

    @PrimaryGeneratedColumn()
    id_monhoc: number;

    @Column()
    ten_monhoc: string;

    @OneToMany(
        () => GiaoVien,
        giaovien => giaovien.monhoc
    )
    giaoviens: GiaoVien[]
    

    @ManyToMany(
        () => HocSinh
    )
    @JoinTable({
        name:"monhocs_hocsinhs",
        joinColumn: {
            name: "monhoc",
            referencedColumnName: 'id_monhoc'
        },
        inverseJoinColumn: {
            name: "hocsinh",
            referencedColumnName: 'id'
        }
    })
    hocsinh: HocSinh[]

}