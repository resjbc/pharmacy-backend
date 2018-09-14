import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, createQueryBuilder } from 'typeorm';
import { EReceipt } from 'models/entitys/receipt.entity';
import { EPerson } from '../models/entitys/person.entity';



@Injectable()
export class ReceiptService {
  constructor(
    @InjectRepository(EReceipt)
    private readonly receiptRepository: Repository<EReceipt>,
    @InjectRepository(EPerson)
    private readonly personRepository: Repository<EPerson>,
  ) { }

  async findAll(id_receipt: any) {
    //console.log(id_receipt);

    const receipt_item = await this.personRepository
      .createQueryBuilder('person')
      .innerJoinAndSelect("person.receipts", "receipt" )
      .innerJoinAndSelect("receipt.member_create", "member_create" )
      .innerJoinAndSelect("receipt.receiptDetails", "receiptDetail" )
      .where("person.id_person = :id", { id: id_receipt })
      .getOne()

    /*const receipt_item = await this.receiptRepository
      .createQueryBuilder('receipt')
      //.select()
      //.innerJoin(EAct,"act","act.id_act = receipt.id_act")
      //.innerJoin(EReceiptDetail,"receipt_details","receipt_details.id_receipt = receipt.id_receipt")
      .leftJoinAndSelect("receipt.receiptDetails", "receiptDetail")
      .where("receipt.id_receipt = :id", { id: id_receipt })
      .orderBy("receipt.date_created", "ASC")
      .getOne()*/

    //console.log(person_item);

    //const receipt_item = await this.receiptRepository.findOne({id_receipt:id_receipt})
    if (!receipt_item) throw new BadRequestException('ไม่มีไอดีนี้ในระบบ');
    return receipt_item;
  }

  async insertReceipt(receipt: EReceipt) {
    return await this.receiptRepository.insert(receipt);
  }




}