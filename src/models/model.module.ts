import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './entitys/photo.entity';
import { PhotoService } from '../services/photo.service';
import { PhotoController } from '../controllers/photo.controller';
import { EReceipt, EReceiptDetail } from './entitys/receipt.entity';
import { EAct } from './entitys/act.entity';
import { ETypeFees, EGroupFees, EListFees } from './entitys/fees-type.entity';
import { ReceiptService } from '../services/receipt.service';
import { ReceiptController } from '../controllers/receipt.controller';
import { EPerson } from './entitys/person.entity';



@Module({
  imports: [
    //TypeOrmModule.forFeature([Photo]), 
    TypeOrmModule.forFeature([EReceipt]),
    TypeOrmModule.forFeature([EReceiptDetail]),
    TypeOrmModule.forFeature([EAct]),
    TypeOrmModule.forFeature([ETypeFees]),
    TypeOrmModule.forFeature([EGroupFees]),
    TypeOrmModule.forFeature([EListFees]),
    TypeOrmModule.forFeature([EPerson]),
  ],
  providers: [
    // PhotoService,
    ReceiptService
  ],
  controllers: [
   // PhotoController,
    ReceiptController
  ],
})
export class PhotoModule { }