import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany } from "typeorm";
import { IsNotEmpty } from "class-validator";
import { IAct } from "../../interfaces/app.interface";
import { ETypeFees } from "./fees-type.entity";

@Entity('Act')
export class EAct implements IAct{

    @PrimaryGeneratedColumn()
     id_act?: number;

    @Column('text')
    @IsNotEmpty()
     description: string;

     @OneToMany(type => ETypeFees, typefees => typefees.act, { nullable: false })
     typefees_s: ETypeFees[];
 

    /* @OneToOne(type => EReceipt, receipt => receipt.act) // specify inverse side as a second parameter
     receipt: EReceipt;*/
    
}