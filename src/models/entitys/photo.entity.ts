import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';
import { IPhoto } from '../../interfaces/photo.interface';
import { IsNotEmpty } from "class-validator";

@Entity()
export class Photo implements IPhoto {
  @PrimaryGeneratedColumn() id: number;

  @Column({ length: 500 })
  @IsNotEmpty()
  name: string;

  @Column('text')
  @IsNotEmpty()
   description: string;

  @Column() filename: string;

  @Column('int') views: number;

  @Column() isPublished: boolean;
}