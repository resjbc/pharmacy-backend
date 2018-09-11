import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { IsNotEmpty } from "class-validator";

@Entity('Act')
export class EAct {

    @PrimaryGeneratedColumn()
     id_act?: number;

    @Column('text')
    @IsNotEmpty()
     description: string;
    
}