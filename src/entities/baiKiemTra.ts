import { Entity,BaseEntity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, ManyToOne, JoinColumn } from "typeorm";
import { HocSinh } from "./hocSinh";
import { GiaoVien } from "./giaoVien";


@Entity('BaiKiemTra')
export class BaiKiemTra extends BaseEntity {

    @PrimaryGeneratedColumn()
    id_baiktra: number;

    @Column()
    ten_baikrta: string;

    @ManyToMany(
        () => HocSinh
    )
    @JoinTable({
        name: 'nhieubaikiemtra_nhieuhocsinh',
        joinColumn: {
            name: 'baikiemtra',
            referencedColumnName: 'id_baiktra'
        },
        inverseJoinColumn: {
            name: 'hocsinh',
            referencedColumnName: 'id'
        }
    })
    hocsinh: HocSinh[]

    @ManyToOne(
        () => GiaoVien,
        giaovien => giaovien.baikiemtra
    )

    @JoinColumn({
        name: 'giaovien_id'
    })
    giaoviens: GiaoVien
}