import { Controller, Get, Post, Body, BadRequestException, Param } from '@nestjs/common';
import { ValidationPipe } from '../pipes/validation.pipe';
import { ReceiptService } from 'services/receipt.service';
import { ParamReceipt, ParamInsertReceipt } from '../models/entitys/receipt.entity';



@Controller('receipt')
export class ReceiptController {
    constructor(private readonly receiptService: ReceiptService) { }

    @Get(':id')
    findAll(@Param(new ValidationPipe()) param: ParamReceipt) {
        //console.log(param.id);
        return this.receiptService.findAll(param.id);
    }

    @Post('add')
    insertReceipt(@Body(new ValidationPipe()) body: ParamInsertReceipt) {
        return this.receiptService.insertReceipt(body);
    }
}