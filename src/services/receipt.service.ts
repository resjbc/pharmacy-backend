import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, createQueryBuilder } from 'typeorm';
import { EReceipt } from 'models/entitys/receipt.entity';



@Injectable()
export class ReceiptService {
  constructor(
    @InjectRepository(EReceipt)
    private readonly receiptRepository: Repository<EReceipt>,
  ) { }

  async findAll(id_receipt: any) {

    const receipt_item = await this.receiptRepository.createQueryBuilder('receipt')
      .innerJoinAndSelect("receipt.receiptDetails", "receiptDetail")
      .where("receipt.id_customer = :id", { id: id_receipt })
      .getOne();

      console.log(receipt_item);

    /*const receipt_item = await this.receiptRepository.findOne({id_receipt:id_receipt})*/
    if (!receipt_item) throw new BadRequestException('ไม่มีไอดีนี้ในระบบ');
    return receipt_item;
  }

  async insertReceipt(receipt: EReceipt) {
    return await this.receiptRepository.insert(receipt);
  }




}