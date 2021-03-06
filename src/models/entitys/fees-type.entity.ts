import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, ManyToOne, JoinColumn, Unique } from "typeorm";
import { IsNotEmpty, IsNumber, IsInt, IsNumberString } from "class-validator";
import { ITypeFees, IListFees } from "../../interfaces/app.interface";
import { EAct } from "./act.entity";

@Unique(["id_act","description"])
@Entity('TypeFees')
export class ETypeFees implements ITypeFees{

    @PrimaryGeneratedColumn()
    id_type?: number;


    @Column( {name: 'id_act', nullable: true })
    @IsNotEmpty()
    id_act?:number ;

    @Column('text')
    @IsNotEmpty()
    description: string;

    @ManyToOne(type => EAct, act => act.typefees_s, {
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
    })
    @JoinColumn({ name: 'id_act' })
    act: EAct;

}

@Unique(["id_type","description","price"])
@Entity('ListFees')
export class EListFees implements IListFees{
   

    @PrimaryGeneratedColumn()
    id_list?: number;

    @Column()
    @IsNotEmpty()
    id_type: number;


    @Column('text')
    @IsNotEmpty()
    description: string;

    @Column('text')
    @IsNotEmpty()
    price: string;

}

export class ParamTypeInAct {
    @IsNotEmpty()
    @IsNumberString()
    id_act: any;
}

export class ParamListInType {
    @IsNotEmpty()
    @IsNumberString()
    id_type: any;
}

export class ParamDeleteList {
    @IsNotEmpty()
    id_list?: number;
}

export class ParamList {
    id_list?: number;
    @IsNotEmpty()
    id_type: number;
    @IsNotEmpty()
    description: string;
    @IsNotEmpty()
    price: string;
}

export class ParamType {
    id_type?: any;
    @IsNotEmpty()
    description?: string;
    @IsNotEmpty()
    id_act: number;
}

export class ParamDeleteType {
    @IsNotEmpty()
    id_type?: any;
    description: string;
    id_act?: number;
}

