import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, OneToMany, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { IsNotEmpty } from "class-validator";
import { IReceipt, IReceiptDetail } from '../../interfaces/app.interface';
import { EAct } from './act.entity';
import { EPerson } from './person.entity';


@Entity('Receipt')
export class EReceipt implements IReceipt {


    @PrimaryGeneratedColumn()
    id_receipt?;

    @Column()
    @IsNotEmpty()
    id_person: number;

    @Column()
    @IsNotEmpty()
    id_member_create: number;

    @Column()
    @IsNotEmpty()
    date_created: Date;

    @Column()
    @IsNotEmpty()
    date_updated: Date;

    @Column()
    @IsNotEmpty()
    id_act: number;

    @OneToMany(type => EReceiptDetail, receiptDetail => receiptDetail.receipt, { nullable: false })
    receiptDetails: EReceiptDetail[];

   @ManyToOne(type => EPerson, person => person.receipts, { nullable: false })
    @JoinColumn({ name: 'id_person' })
    person: EPerson;


    @OneToOne(type => EAct, act => act.receipt, { nullable: false })
    @JoinColumn({ name: 'id_act' })
    act: EAct

}


@Entity('ReceiptDetail')
export class EReceiptDetail implements IReceiptDetail {

    @PrimaryGeneratedColumn()
    id_receipt_detail?;


    @Column()
    @IsNotEmpty()
    id_list: number;


    @Column('text')
    @IsNotEmpty()
    list: string;


    @Column()
    @IsNotEmpty()
    qty: number;

    @Column()
    @IsNotEmpty()
    price: number;


    @ManyToOne(type => EReceipt, receipt => receipt.receiptDetails, { nullable: false })
    @JoinColumn({ name: 'id_receipt' })
    receipt: EReceipt;

}

export class ParamReceipt {
    @IsNotEmpty()
    id: number
}