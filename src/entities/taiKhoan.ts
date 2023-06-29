import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('TaiKhoan')
export class TaiKhoan extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    tenDangNhap: string;

    @Column()
    matKhau: string;

    @Column()
    role: string;
}