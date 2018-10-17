import { Entity, Column, PrimaryGeneratedColumn, OneToMany, Unique } from "typeorm";
import { IsNotEmpty, IsNumberString } from "class-validator";
import { IAct } from "../../interfaces/app.interface";
import { ETypeFees } from "./fees-type.entity";

@Unique(["description"])
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


export class ParamDeleteAct {
    @IsNotEmpty()
    @IsNumberString()
    id_act: any;
    description?: string;
}


export class ParamAct {

    id_act: any;
    @IsNotEmpty()
    description?: string;
}