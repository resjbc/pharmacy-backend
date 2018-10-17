"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const person_entity_1 = require("../models/entitys/person.entity");
const account_service_1 = require("../services/account.service");
const passport_1 = require("@nestjs/passport");
let AccountController = class AccountController {
    constructor(account) {
        this.account = account;
    }
    Login(body) {
        return this.account.onLogin(body);
    }
    getUserLogin(req) {
        const userLogin = req.user;
        userLogin.username = '';
        userLogin.password = '';
        return userLogin;
    }
    changePassword(req, body) {
        return this.account.onChangePassword(req.user.id_person, body);
    }
};
__decorate([
    common_1.Post('login'),
    __param(0, common_1.Body(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [person_entity_1.ParamLogin]),
    __metadata("design:returntype", void 0)
], AccountController.prototype, "Login", null);
__decorate([
    common_1.Get('data'),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AccountController.prototype, "getUserLogin", null);
__decorate([
    common_1.Post('change-password'),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    __param(0, common_1.Req()), __param(1, common_1.Body(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, person_entity_1.ParamChangePassword]),
    __metadata("design:returntype", void 0)
], AccountController.prototype, "changePassword", null);
AccountController = __decorate([
    common_1.Controller('account'),
    __metadata("design:paramtypes", [account_service_1.AccountService])
], AccountController);
exports.AccountController = AccountController;
//# sourceMappingURL=account.controller.js.map