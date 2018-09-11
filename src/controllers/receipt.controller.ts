import { Controller, Get, Post, Body, BadRequestException } from '@nestjs/common';
import { ValidationPipe } from '../pipes/validation.pipe';
import { ReceiptService } from 'services/receipt.service';
import { EReceipt } from 'models/entitys/receipt.entity';


@Controller('receipt')
export class ReceiptController {
  constructor(private readonly receiptService: ReceiptService) {}

  @Get()
  findAll() {
    return this.receiptService.findAll();
  }

  @Post('add')
  insertPhoto(@Body(new ValidationPipe()) body:EReceipt) {
    return this.receiptService.insertReceipt(body);
  }
}