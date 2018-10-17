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
const validation_pipe_1 = require("../pipes/validation.pipe");
const receipt_service_1 = require("../services/receipt.service");
const receipt_entity_1 = require("../models/entitys/receipt.entity");
const app_interface_1 = require("../interfaces/app.interface");
const passport_1 = require("@nestjs/passport");
const role_gurad_1 = require("../guards/role.gurad");
let ReceiptController = class ReceiptController {
    constructor(receiptService) {
        this.receiptService = receiptService;
    }
    findReceiptDate(query) {
        return this.receiptService.findReceiptDate(query);
    }
    findReceiptCash(query) {
        return this.receiptService.findReceiptCash(query);
    }
    findReceipt(param) {
        return this.receiptService.findReceipt(param.id_reference);
    }
    findReceipPerson(param) {
        return this.receiptService.findReceiptPerson(param);
    }
    insertReceipt(body) {
        return this.receiptService.insertReceipt(body);
    }
    updateReceiptCash(body) {
        return this.receiptService.updateReceipt(body);
    }
    deleteReceiptDetail(param) {
        return this.receiptService.deleteReceiptDetail(param);
    }
};
__decorate([
    common_1.Get(),
    common_1.UseGuards(new role_gurad_1.RoleGuard(app_interface_1.RoleAccount.Admin, app_interface_1.RoleAccount.Pharmacy, app_interface_1.RoleAccount.Cash)),
    __param(0, common_1.Query(new validation_pipe_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [receipt_entity_1.QueryReceipt]),
    __metadata("design:returntype", void 0)
], ReceiptController.prototype, "findReceiptDate", null);
__decorate([
    common_1.Get('cash?'),
    common_1.UseGuards(new role_gurad_1.RoleGuard(app_interface_1.RoleAccount.Admin, app_interface_1.RoleAccount.Pharmacy, app_interface_1.RoleAccount.Cash)),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [receipt_entity_1.QueryReceiptCash]),
    __metadata("design:returntype", void 0)
], ReceiptController.prototype, "findReceiptCash", null);
__decorate([
    common_1.Get(':id_reference'),
    common_1.UseGuards(new role_gurad_1.RoleGuard(app_interface_1.RoleAccount.Admin, app_interface_1.RoleAccount.Pharmacy, app_interface_1.RoleAccount.Cash)),
    __param(0, common_1.Param(new validation_pipe_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [receipt_entity_1.ParamReceipt]),
    __metadata("design:returntype", void 0)
], ReceiptController.prototype, "findReceipt", null);
__decorate([
    common_1.Get('person/:cid'),
    common_1.UseGuards(new role_gurad_1.RoleGuard(app_interface_1.RoleAccount.Admin, app_interface_1.RoleAccount.Pharmacy, app_interface_1.RoleAccount.Cash)),
    __param(0, common_1.Param(new validation_pipe_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [receipt_entity_1.ParamReceiptPerson]),
    __metadata("design:returntype", void 0)
], ReceiptController.prototype, "findReceipPerson", null);
__decorate([
    common_1.Post('add'),
    common_1.UseGuards(new role_gurad_1.RoleGuard(app_interface_1.RoleAccount.Admin, app_interface_1.RoleAccount.Pharmacy)),
    __param(0, common_1.Body(new validation_pipe_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [receipt_entity_1.ParamInsertReceipt]),
    __metadata("design:returntype", void 0)
], ReceiptController.prototype, "insertReceipt", null);
__decorate([
    common_1.Post('update'),
    common_1.UseGuards(new role_gurad_1.RoleGuard(app_interface_1.RoleAccount.Admin, app_interface_1.RoleAccount.Pharmacy, app_interface_1.RoleAccount.Cash)),
    __param(0, common_1.Body(new validation_pipe_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [receipt_entity_1.ParamUpdateCashReceipt]),
    __metadata("design:returntype", void 0)
], ReceiptController.prototype, "updateReceiptCash", null);
__decorate([
    common_1.Delete('receiptDetail/:id_receipt_detail'),
    common_1.UseGuards(new role_gurad_1.RoleGuard(app_interface_1.RoleAccount.Admin, app_interface_1.RoleAccount.Pharmacy)),
    __param(0, common_1.Param(new validation_pipe_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [receipt_entity_1.ParamDeleteReceiptDetail]),
    __metadata("design:returntype", void 0)
], ReceiptController.prototype, "deleteReceiptDetail", null);
ReceiptController = __decorate([
    common_1.Controller('receipt'),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    __metadata("design:paramtypes", [receipt_service_1.ReceiptService])
], ReceiptController);
exports.ReceiptController = ReceiptController;
//# sourceMappingURL=receipt.controller.js.map