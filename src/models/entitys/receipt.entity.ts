import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, OneToMany, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { IsNotEmpty, IsNumberString } from "class-validator";
import { IReceipt, IReceiptDetail } from '../../interfaces/app.interface';
import { EPerson } from './person.entity';


@Entity('Receipt')
export class EReceipt implements IReceipt {


    @PrimaryGeneratedColumn()
    id_receipt?;

    @Column({ name: 'id_person' , nullable: true })
    @IsNotEmpty()
    id_person: number;

    @Column({ name: 'id_member_create' , nullable: true })
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

    @Column({ nullable: true })
    id_reference?: string;

    @Column({ nullable: true })
    id_receipt_cash?: string;

    @Column({ nullable: true })
    id_receipt_cash_number?: string;

    @Column({ name: 'id_member_cash', nullable: true })
    id_member_cash?: number;
    /*@Column()
    @IsNotEmpty()
    id_act: number;*/

    @OneToMany(type => EReceiptDetail, receiptDetail => receiptDetail.receipt)
    receiptDetails: EReceiptDetail[];

    @ManyToOne(type => EPerson, person => person.receipts, { 
        nullable: true ,
        onDelete: "SET NULL"
    })
    @JoinColumn({ name: 'id_person' })
    person: EPerson;

    @ManyToOne(type => EPerson, person => person.receipts, { 
        nullable: true ,
        onDelete: "SET NULL"
    })
    @JoinColumn({ name: 'id_member_create' })
    member_create: EPerson;

    @ManyToOne(type => EPerson, person => person.receipts, {
         nullable: true ,
         onDelete: "SET NULL"
        })
    @JoinColumn({ name: 'id_member_cash' })
    member_cash: EPerson;


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
    description: string;

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
    @IsNumberString()
    id_reference: any
}

export class ParamReceiptDetail {
    @IsNotEmpty()
    id_list: number;
    @IsNotEmpty()
    description: string;
    qty?: number;
    @IsNotEmpty()
    price: number;
    @IsNotEmpty()
    type: string;
}

export class ParamInsertReceipt {


    id_receipt?: any;

    @IsNotEmpty()
    id_person: any;
    @IsNotEmpty()
    id_member_create: any;

    place: string;
    place_address: string;

    @IsNotEmpty()
    date_created: Date;
    @IsNotEmpty()
    date_updated: Date;

    @IsNotEmpty()
    receiptDetails: ParamReceiptDetail[];
}


export class ParamDeleteReceiptDetail {
    @IsNotEmpty()
    @IsNumberString()
    id_receipt_detail: any
}