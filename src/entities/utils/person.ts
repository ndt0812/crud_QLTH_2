import { Entity,BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Person extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    ten: string;

}