import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, OneToMany, Unique } from 'typeorm';
import { IPerson, RoleAccount } from '../../interfaces/app.interface';
import { IsNotEmpty, IsNumberString, Matches } from 'class-validator';
import { EReceipt } from './receipt.entity';
import { EPlace } from './place.entity';
import { IsRoleAccount } from '../../pipes/validation.pipe';


@Unique(["cid"])
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

    @Column({ nullable: true })
    address: string;

    @Column({ nullable: true })
    mobile?: string;

    @Column({ nullable: true })
    username: string;

    @Column({ nullable: true })
    password: string;

    @Column()
    @IsNotEmpty()
    @IsRoleAccount()
    role: RoleAccount;

    @OneToMany(type => EReceipt, receipt => receipt.person, { nullable: true })
    receipts: EReceipt[];

    @OneToMany(type => EPlace, place => place.person, { nullable: true })
    places: EPlace[];
}

export class ParamPerson {
    @IsNotEmpty()
    @IsNumberString()
    pid: any;
}

export class ParamAddPerson {

    id_person?: any;

    @Matches(/^[0-9]{13,13}$/)
    cid: any;

    @IsNotEmpty()
    firstname: string;

    @IsNotEmpty()
    lastname: string;

    address?: string;
    mobile?: string;
    username?: string;
    password?: string;

    @IsNotEmpty()
    @IsRoleAccount()
    role: RoleAccount

}

export class ParamDeletePerson {
    @IsNotEmpty()
    @IsNumberString()
    id_person?: any;
}