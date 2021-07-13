import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("games")
export default class Games{
    @PrimaryGeneratedColumn("uuid")
    id: string
    @Column()
    name: string
    @Column("decimal")
    price: number
    @Column("int")
    year: number
    @CreateDateColumn()
    created_at: Date
    @UpdateDateColumn()
    updated_at: Date
}
