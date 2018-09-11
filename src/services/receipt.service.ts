import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EReceipt } from 'models/entitys/receipt.entity';



@Injectable()
export class ReceiptService {
  constructor(
    @InjectRepository(EReceipt)
    private readonly receiptRepository: Repository<EReceipt>,
  ) {}

  async findAll() {
    return await this.receiptRepository.find();
  }

  async insertReceipt(receipt: EReceipt) {
    return await this.receiptRepository.insert(receipt);
  }

   
    
  
}