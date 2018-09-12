import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { IsNotEmpty } from "class-validator";
import { IReceipt, IReceiptDetail } from '../../interfaces/app.interface';


@Entity('Receipt')
export class EReceipt implements IReceipt {

    @PrimaryGeneratedColumn()
    id_receipt?;

    @Column()
    @IsNotEmpty()
    id_customer: number;

    @Column()
    @IsNotEmpty()
    id_act: number;

    @Column()
    @IsNotEmpty()
    id_member_create: number;

    @Column()
    @IsNotEmpty()
    date_created: Date;

    @Column()
    date_updated: Date;

    @OneToMany(type => EReceiptDetail, receiptDetail => receiptDetail.id_receipt)
    receiptDetails: EReceiptDetail[];


}


@Entity('ReceiptDetail')
export class EReceiptDetail implements IReceiptDetail {

    @PrimaryColumn()
    @IsNotEmpty()
    id_list: number;

    @PrimaryColumn({ name: 'id_receipt', type: 'int' })
    @IsNotEmpty()
    id_receipt: number;


    @Column()
    @IsNotEmpty()
    qty: number;

    @ManyToOne(type => EReceipt, receipt => receipt.receiptDetails)
    @JoinColumn({ name: 'id_receipt' })
    receipt: EReceipt;

}

export class ParamReceipt {
    @IsNotEmpty()
    id: number
}