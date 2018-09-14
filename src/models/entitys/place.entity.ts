import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";

import { IListFees, IPlace } from "interfaces/app.interface";

import { IsNotEmpty } from "class-validator";
import { EPerson } from "./person.entity";

@Entity('Place')
export class EPlace implements IPlace{
   

    @PrimaryGeneratedColumn()
    id_place?: number;


    @Column('id_person')
    @IsNotEmpty()
    id_person: number;

    @Column('text')
    @IsNotEmpty()
    description: string;

    @ManyToOne(type => EPerson, person => person.places, { nullable: false })
    @JoinColumn({ name: 'id_person' })
    person: EPerson;


}