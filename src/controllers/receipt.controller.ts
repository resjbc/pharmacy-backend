import { Controller, Get, Post, Body, BadRequestException, Param, Delete } from '@nestjs/common';
import { ValidationPipe } from '../pipes/validation.pipe';
import { ReceiptService } from 'services/receipt.service';
import { ParamReceipt, ParamInsertReceipt, ParamReceiptDetail, ParamDeleteReceiptDetail } from '../models/entitys/receipt.entity';
import { IReceiptDetail } from '../interfaces/app.interface';



@Controller('receipt')
export class ReceiptController {
    constructor(private readonly receiptService: ReceiptService) { }

    @Get(':id_reference')
    findReceipt(@Param(new ValidationPipe()) param: ParamReceipt) {
        //console.log(param.id);
        return this.receiptService.findReceipt(param.id_reference);
    }

    @Post('add')
    insertReceipt(@Body(new ValidationPipe()) body: ParamInsertReceipt) {
        return this.receiptService.insertReceipt(body);
    }

    @Delete('receiptDetail/:id_receipt_detail')
    deleteReceiptDetail(@Param(new ValidationPipe()) param: ParamDeleteReceiptDetail) {
       return this.receiptService.deleteReceiptDetail(param);
    }
}