import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
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
import { AccountController } from '../controllers/account.controller';
import { AccountService } from '../services/account.service';
import { JwtAuthenService, JwtAuthenStrategy } from '../services/jwt-authen.service';



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
    PersonService,
    AccountService,
    JwtAuthenService,
    JwtAuthenStrategy
  ],
  controllers: [
   // PhotoController,
    ReceiptController,
    ActTypeListController,
    PersonController,
    AccountController
  ],
})
export class ModelsModule { }