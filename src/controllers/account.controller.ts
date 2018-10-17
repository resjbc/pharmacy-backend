import { Controller, Post, Body, ValidationPipe, Get, Req, UseGuards } from "@nestjs/common";
import { ParamLogin, ParamChangePassword } from "../models/entitys/person.entity";
import { AccountService } from "../services/account.service";
import { IPerson } from "../interfaces/app.interface";
import { Request } from "express";
import { AuthGuard } from "@nestjs/passport";


@Controller('account')
export class AccountController {
    constructor(private readonly account: AccountService) { }

    @Post('login')
    Login(@Body(new ValidationPipe()) body: ParamLogin) {
        return this.account.onLogin(body);
    }

    @Get('data') // แสดงข้อมูลผู้ใช้งานที่เข้าสู่ระบบ
    @UseGuards(AuthGuard('jwt'))
    getUserLogin(@Req() req: Request) {
        const userLogin: IPerson = req.user as IPerson;
        // console.log(req);
        userLogin.username = '';
        userLogin.password = '';
        return userLogin;
    }

    @Post('change-password') //เปลี่ยนรหัสผ่าน
    @UseGuards(AuthGuard('jwt'))
    changePassword(@Req() req: Request, @Body(new ValidationPipe()) body: ParamChangePassword) {
        return this.account.onChangePassword(req.user.id_person, body);
    }
}