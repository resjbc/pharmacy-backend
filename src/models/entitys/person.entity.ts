import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, OneToMany, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { IPerson, RoleAccount } from '../../interfaces/app.interface';
import { IsNotEmpty } from 'class-validator';
import { EReceipt } from './receipt.entity';
import { EPlace } from './place.entity';



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

    @Column({ nullable: true })
    @IsNotEmpty()
    username: string;

    @Column({ nullable: true })
    @IsNotEmpty()
    password: string;

    @Column()
    @IsNotEmpty()
    role: RoleAccount;

    @OneToMany(type => EReceipt, receipt => receipt.person , { nullable: false })
    receipts: EReceipt[];

    @OneToMany(type => EPlace, place => place.person , { nullable: false })
    places: EPlace[];
}