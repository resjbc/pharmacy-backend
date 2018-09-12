import { Controller, Get, Post, Body, BadRequestException, Param } from '@nestjs/common';
import { ValidationPipe } from '../pipes/validation.pipe';
import { ReceiptService } from 'services/receipt.service';
import { IReceipt } from '../interfaces/app.interface';
import { ParamReceipt } from '../models/entitys/receipt.entity';



@Controller('receipt')
export class ReceiptController {
    constructor(private readonly receiptService: ReceiptService) { }

    @Get(':id')
    findAll(@Param(new ValidationPipe()) param: ParamReceipt) {
        return this.receiptService.findAll(param.id);
    }

    @Post('add')
    insertPhoto(@Body(new ValidationPipe()) body: IReceipt) {
        return this.receiptService.insertReceipt(body);
    }
}