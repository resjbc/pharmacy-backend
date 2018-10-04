import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, OneToMany, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { IsNotEmpty } from "class-validator";
import { IReceipt, IReceiptDetail } from '../../interfaces/app.interface';
import { EPerson } from './person.entity';


@Entity('Receipt')
export class EReceipt implements IReceipt {


    @PrimaryGeneratedColumn()
    id_receipt?;

    @Column({ name: 'id_person' })
    @IsNotEmpty()
    id_person: number;

    @Column('id_member_create')
    @IsNotEmpty()
    id_member_create: number;

    @Column({ nullable: true })
    place: string;

    @Column({ nullable: true })
    place_address: string;

    @Column()
    @IsNotEmpty()
    date_created: Date;

    @Column()
    @IsNotEmpty()
    date_updated: Date;

    /*@Column()
    @IsNotEmpty()
    id_act: number;*/

    @OneToMany(type => EReceiptDetail, receiptDetail => receiptDetail.receipt)
    receiptDetails: EReceiptDetail[];

    @ManyToOne(type => EPerson, person => person.receipts, { nullable: false })
    @JoinColumn({ name: 'id_person' })
    person: EPerson;

    @ManyToOne(type => EPerson, person => person.receipts, { nullable: false })
    @JoinColumn({ name: 'id_member_create' })
    member_create: EPerson;


    /*@OneToOne(type => EAct, act => act.receipt, { nullable: false })
    @JoinColumn({ name: 'id_act' })
    act: EAct*/

}


@Entity('ReceiptDetail')
export class EReceiptDetail implements IReceiptDetail {

    @PrimaryGeneratedColumn()
    id_receipt_detail?;

    @Column('id_receipt')
    @IsNotEmpty()
    id_receipt: number;


    @Column()
    @IsNotEmpty()
    id_list: number;


    @Column('text')
    @IsNotEmpty()
    list: string;

    @Column('text')
    @IsNotEmpty()
    type: string;


    @Column({ nullable: true })
    //@IsNotEmpty()
    qty: number;

    @Column()
    @IsNotEmpty()
    price: number;


    @ManyToOne(type => EReceipt, receipt => receipt.receiptDetails,
        {
            onUpdate: "CASCADE",
            onDelete: "CASCADE"
        })
    @JoinColumn({ name: 'id_receipt' })
    receipt: EReceipt;

}

export class ParamReceipt {
    @IsNotEmpty()
    id: number
}

export class ParamReceiptDetail {
    @IsNotEmpty()
    id_list: string;
    @IsNotEmpty()
    list: string;
    qty?: number;
    @IsNotEmpty()
    price: number;
    @IsNotEmpty()
    type: string;
}

export class ParamInsertReceipt  {

    @IsNotEmpty()
    id_person: any;
    @IsNotEmpty()
    id_member_create: any;

    place: string;
    place_address: string;

    @IsNotEmpty()
    date_created:  Date;
    @IsNotEmpty()
    date_updated: Date;

    @IsNotEmpty()
    receiptDetails: ParamReceiptDetail[];
}