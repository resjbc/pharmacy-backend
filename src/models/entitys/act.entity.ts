import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { IsNotEmpty } from "class-validator";
import { IAct } from "../../interfaces/app.interface";
import { EReceipt } from "./receipt.entity";

@Entity('Act')
export class EAct implements IAct{

    @PrimaryGeneratedColumn()
     id_act?: number;

    @Column('text')
    @IsNotEmpty()
     description: string;

     @OneToOne(type => EReceipt, receipt => receipt.act) // specify inverse side as a second parameter
     receipt: EReceipt;
    
}