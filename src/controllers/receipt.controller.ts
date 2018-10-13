import { Controller, Get, Post, Body, BadRequestException, Param, Delete, Query } from '@nestjs/common';
import { ValidationPipe } from '../pipes/validation.pipe';
import { ReceiptService } from 'services/receipt.service';
import { ParamReceipt, ParamInsertReceipt, ParamReceiptDetail, ParamDeleteReceiptDetail, QueryReceipt, ParamReceiptPerson, ParamUpdateCashReceipt } from '../models/entitys/receipt.entity';
import { IReceiptDetail } from '../interfaces/app.interface';



@Controller('receipt')
export class ReceiptController {
    constructor(private readonly receiptService: ReceiptService) { }

    @Get(':id_reference')
    findReceipt(@Param(new ValidationPipe()) param: ParamReceipt) {
        //console.log(param.id);
        return this.receiptService.findReceipt(param.id_reference);
    }

    @Get()
    findReceiptDate(@Query(new ValidationPipe()) query: QueryReceipt) {
        //console.log(param.id);
        return this.receiptService.findReceiptDate(query);
    }


    @Get('person/:cid')
    findReceipPerson(@Param(new ValidationPipe()) param: ParamReceiptPerson) {
        //console.log(param.id);
        return this.receiptService.findReceiptPerson(param);
    }

    @Post('add')
    insertReceipt(@Body(new ValidationPipe()) body: ParamInsertReceipt) {
        return this.receiptService.insertReceipt(body);
    }

    @Post('update')
    updateReceiptCash(@Body(new ValidationPipe()) body: ParamUpdateCashReceipt) {
        return this.receiptService.updateReceipt(body);
    }

    @Delete('receiptDetail/:id_receipt_detail')
    deleteReceiptDetail(@Param(new ValidationPipe()) param: ParamDeleteReceiptDetail) {
       return this.receiptService.deleteReceiptDetail(param);
    }
}