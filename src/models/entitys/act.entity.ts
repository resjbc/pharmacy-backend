import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { IsNotEmpty } from "class-validator";
import { IAct } from "../../interfaces/app.interface";

@Entity('Act')
export class EAct implements IAct{

    @PrimaryGeneratedColumn()
     id_act?: number;

    @Column('text')
    @IsNotEmpty()
     description: string;
    
}