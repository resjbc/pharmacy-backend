import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, OneToMany, ManyToOne } from 'typeorm';
import { IsNotEmpty } from "class-validator";


@Entity()
export class EReceipt {

    @PrimaryGeneratedColumn() id_receipt?: number;

    @Column()
    @IsNotEmpty()
    customer: string;


    @Column()
    @IsNotEmpty()
    receipt_detail: string;


    @Column()
    @IsNotEmpty()
    act: string;

    @Column()
    @IsNotEmpty()
    member_create: string;

    @Column()
    @IsNotEmpty()
    date_created: Date;

    @Column()
    date_updated?: Date;

    @OneToMany(type => EReceiptDetail, receiptDetail => receiptDetail.receipt)
    receiptDetails: EReceiptDetail[];


}


@Entity()
export class EReceiptDetail {

    @PrimaryColumn('int')
    @IsNotEmpty()
     id_receipt_detail: number;

    @PrimaryColumn('int')
    @IsNotEmpty()
     id_receipt: number;

     @Column('int')
     @IsNotEmpty()
     qty: number;


    @ManyToOne(type => EReceipt, receipt => receipt.receiptDetails)
    receipt: EReceipt;

}