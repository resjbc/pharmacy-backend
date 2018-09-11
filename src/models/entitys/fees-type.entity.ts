import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn } from "typeorm";
import { IsNotEmpty } from "class-validator";

@Entity()
export class ETypeFees {

    @PrimaryGeneratedColumn()
    id_type?: number;

    @Column('text')
    @IsNotEmpty()
    description: string;

}

export class EGroupFees {


    @PrimaryGeneratedColumn()
    id_group?: number;

    @Column('text')
    @IsNotEmpty()
    type?: string;


    @Column('text')
    @IsNotEmpty()
    description: string;

}

export class EListFees {


    @PrimaryGeneratedColumn()
    id_list?: number;

    @Column('text')
    @IsNotEmpty()
    type: string;

    @Column('text')
    @IsNotEmpty()
    group: string;


    @Column('text')
    @IsNotEmpty()
    description: string;

}