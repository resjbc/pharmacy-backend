import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, OneToMany, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { IPerson, RoleAccount } from '../../interfaces/app.interface';
import { IsNotEmpty } from 'class-validator';
import { EReceipt } from './receipt.entity';



@Entity('Person')
export class EPerson implements IPerson {
    

    @PrimaryGeneratedColumn()
    id_person?;

    @Column()
    @IsNotEmpty()
    cid: string;

    @Column()
    @IsNotEmpty()
    firstname: string;

    @Column()
    @IsNotEmpty()
    lastname: string;

    @Column()
    @IsNotEmpty()
    address: string;

    @Column()
    mobile?: string;

    @Column()
    @IsNotEmpty()
    username: string;

    @Column()
    @IsNotEmpty()
    password: string;

    @Column()
    @IsNotEmpty()
    role: RoleAccount;

    @OneToMany(type => EReceipt, receipt => receipt.id_person , { nullable: false })
    receipts: EReceipt[];
}