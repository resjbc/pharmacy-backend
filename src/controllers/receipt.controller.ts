import { Controller, Get, Post, Body, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { ValidationPipe } from '../pipes/validation.pipe';
import { ReceiptService } from '../services/receipt.service';
import { ParamReceipt, ParamInsertReceipt, ParamDeleteReceiptDetail, QueryReceipt, ParamReceiptPerson, ParamUpdateCashReceipt, QueryReceiptCash } from '../models/entitys/receipt.entity';
import { RoleAccount } from '../interfaces/app.interface';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuard } from '../guards/role.gurad';



@Controller('receipt')
@UseGuards(AuthGuard('jwt'))
export class ReceiptController {
    constructor(private readonly receiptService: ReceiptService) { }

    
    @Get()
    @UseGuards(new RoleGuard(RoleAccount.Admin,RoleAccount.Pharmacy,RoleAccount.Cash))
    findReceiptDate(@Query(new ValidationPipe()) query: QueryReceipt) {
        //console.log(param.id);
        return this.receiptService.findReceiptDate(query);
    }

    @Get('cash?')
    @UseGuards(new RoleGuard(RoleAccount.Admin,RoleAccount.Pharmacy,RoleAccount.Cash))
    findReceiptCash(@Query() query: QueryReceiptCash) {
        return this.receiptService.findReceiptCash(query);
    }

    @Get(':id_reference')
    @UseGuards(new RoleGuard(RoleAccount.Admin,RoleAccount.Pharmacy,RoleAccount.Cash))
    findReceipt(@Param(new ValidationPipe()) param: ParamReceipt) {
        return this.receiptService.findReceipt(param.id_reference);
    }


    @Get('person/:cid')
    @UseGuards(new RoleGuard(RoleAccount.Admin,RoleAccount.Pharmacy,RoleAccount.Cash))
    findReceipPerson(@Param(new ValidationPipe()) param: ParamReceiptPerson) {
        //console.log(param.id);
        return this.receiptService.findReceiptPerson(param);
    }

    @Post('add')
    @UseGuards(new RoleGuard(RoleAccount.Admin,RoleAccount.Pharmacy))
    insertReceipt(@Body(new ValidationPipe()) body: ParamInsertReceipt) {
        return this.receiptService.insertReceipt(body);
    }

    @Post('update')
    @UseGuards(new RoleGuard(RoleAccount.Admin,RoleAccount.Pharmacy,RoleAccount.Cash))
    updateReceiptCash(@Body(new ValidationPipe()) body: ParamUpdateCashReceipt) {
        return this.receiptService.updateReceipt(body);
    }

    @Delete('receiptDetail/:id_receipt_detail')
    @UseGuards(new RoleGuard(RoleAccount.Admin,RoleAccount.Pharmacy))
    deleteReceiptDetail(@Param(new ValidationPipe()) param: ParamDeleteReceiptDetail) {
       return this.receiptService.deleteReceiptDetail(param);
    }
}