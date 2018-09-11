import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, OneToMany, ManyToOne } from 'typeorm';
import { IsNotEmpty } from "class-validator";


@Entity('Receipt')
export class EReceipt {

    @PrimaryGeneratedColumn() id_receipt?: number;

    @Column('text')
    @IsNotEmpty()
    customer: string;


    @Column('text')
    @IsNotEmpty()
    receipt_detail: string;


    @Column('text')
    @IsNotEmpty()
    act: string;

    @Column('text')
    @IsNotEmpty()
    member_create: string;

    @Column()
    @IsNotEmpty()
    date_created: Date;

    @Column()
    date_updated?: Date;

    /*@OneToMany(type => EReceiptDetail, receiptDetail => receiptDetail.receipt)
    receiptDetails: EReceiptDetail[];*/


}


@Entity('ReceiptDetail')
export class EReceiptDetail {

    @PrimaryColumn()
    @IsNotEmpty()
    id_receipt_detail: number;

    @PrimaryColumn()
    @IsNotEmpty()
    id_receipt: number;

    @Column('text')
    @IsNotEmpty()
    list: string;

    @Column('int')
    @IsNotEmpty()
    qty: number;


    /*@ManyToOne(type => EReceipt, receipt => receipt.receiptDetails)
    receipt: EReceipt;*/

}