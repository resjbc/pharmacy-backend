import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './entitys/photo.entity';
import { PhotoService } from '../services/photo.service';
import { PhotoController } from '../controllers/photo.controller';
import { EReceipt, EReceiptDetail } from './entitys/receipt.entity';
import { EAct } from './entitys/act.entity';
import { ETypeFees, EListFees } from './entitys/fees-type.entity';
import { ReceiptService } from '../services/receipt.service';
import { ReceiptController } from '../controllers/receipt.controller';
import { EPerson } from './entitys/person.entity';
import { ActTypeListService } from '../services/act_type_list.service';
import { ActTypeListController } from '../controllers/act_type_list.controller';
import { PersonController } from '../controllers/person.controller';
import { PersonService } from '../services/person.service';



@Module({
  imports: [
    //TypeOrmModule.forFeature([Photo]), 
    TypeOrmModule.forFeature([EReceipt]),
    TypeOrmModule.forFeature([EReceiptDetail]),
    TypeOrmModule.forFeature([EAct]),
    TypeOrmModule.forFeature([ETypeFees]),
    TypeOrmModule.forFeature([EListFees]),
    TypeOrmModule.forFeature([EPerson]),
  ],
  providers: [
    // PhotoService,
    ReceiptService,
    ActTypeListService,
    PersonService
  ],
  controllers: [
   // PhotoController,
    ReceiptController,
    ActTypeListController,
    PersonController
  ],
})
export class ModelsModule { }