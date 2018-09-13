import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, createQueryBuilder } from 'typeorm';
import { EReceipt, EReceiptDetail } from 'models/entitys/receipt.entity';
import { EAct } from '../models/entitys/act.entity';



@Injectable()
export class ReceiptService {
  constructor(
    @InjectRepository(EReceipt)
    private readonly receiptRepository: Repository<EReceipt>,
  ) { }

  async findAll(id_receipt: any) {
   
    const receipt_item = await this.receiptRepository
    .createQueryBuilder('receipt')
      //.select()
      //.innerJoin(EAct,"act","act.id_act = receipt.id_act")
      //.innerJoin(EReceiptDetail,"receipt_details","receipt_details.id_receipt = receipt.id_receipt")
      .innerJoinAndSelect("receipt.receiptDetails", "receiptDetail")
      .innerJoinAndSelect("receipt.act","act")
      .where("receipt.id_receipt = :id", { id: id_receipt}).orderBy("receipt.date_created","ASC")
      .getMany()
      
     // console.log(receipt_item);

    /*const receipt_item = await this.receiptRepository.findOne({id_receipt:id_receipt})*/
    if (!receipt_item) throw new BadRequestException('ไม่มีไอดีนี้ในระบบ');
    return receipt_item;
  }

  async insertReceipt(receipt: EReceipt) {
    return await this.receiptRepository.insert(receipt);
  }




}