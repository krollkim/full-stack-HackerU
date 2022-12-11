import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity("contacts")
export class contact {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 40 })
    fullName: string;

    @CreateDateColumn()
    createTime: Date;

    @Column({ type: 'varchar', length: 15 })
    phone: string;

    @Column({ type: 'varchar', length: 40 })
    email: string;

    @Column({ type: 'varchar', length: 150 })
    content: string;

    @Column()
    satisfaction: number;
    
    @Column({type: 'boolean', default: false})
    isCompleted: boolean;



}
