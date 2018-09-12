import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";
import { IsNotEmpty } from "class-validator";
import { ITypeFees, IGroupFees, IListFees } from "../../interfaces/app.interface";

@Entity('TypeFees')
export class ETypeFees implements ITypeFees{

    @PrimaryGeneratedColumn()
    id_type?: number;

    @Column('text')
    @IsNotEmpty()
    description: string;

}


@Entity('GroupFees')
export class EGroupFees implements IGroupFees {


    @PrimaryGeneratedColumn()
    id_group?: number;

    @PrimaryColumn()
    @IsNotEmpty()
    id_type?: number;


    @Column('text')
    @IsNotEmpty()
    description: string;

}

@Entity('ListFees')
export class EListFees implements IListFees{
   

    @PrimaryGeneratedColumn()
    id_list?: number;

    @Column()
    @IsNotEmpty()
    id_type: number;

    @Column()
    @IsNotEmpty()
    id_group: number;


    @Column('text')
    @IsNotEmpty()
    description: string;

    @Column('text')
    @IsNotEmpty()
    price: string;

}