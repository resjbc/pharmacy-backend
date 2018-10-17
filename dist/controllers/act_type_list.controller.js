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
const act_type_list_service_1 = require("../services/act_type_list.service");
const fees_type_entity_1 = require("../models/entitys/fees-type.entity");
const validation_pipe_1 = require("../pipes/validation.pipe");
const act_entity_1 = require("../models/entitys/act.entity");
const passport_1 = require("@nestjs/passport");
const role_gurad_1 = require("../guards/role.gurad");
const app_interface_1 = require("../interfaces/app.interface");
let ActTypeListController = class ActTypeListController {
    constructor(act_type_listService) {
        this.act_type_listService = act_type_listService;
    }
    ActAll() {
        return this.act_type_listService.getActs();
    }
    deleteReceiptDetail(param) {
        return this.act_type_listService.deleteAct(param);
    }
    addAct(body) {
        return this.act_type_listService.addAct(body);
    }
    TypeInAct(param) {
        return this.act_type_listService.TypeInAct(param.id_act);
    }
    deleteTypeInAct(param) {
        return this.act_type_listService.deleteType(param);
    }
    addType(body) {
        return this.act_type_listService.addType(body);
    }
    ListInType(param) {
        return this.act_type_listService.ListInType(param.id_type);
    }
    deleteList(param) {
        return this.act_type_listService.deleteList(param);
    }
    addList(body) {
        return this.act_type_listService.addList(body);
    }
};
__decorate([
    common_1.Get("act"),
    common_1.UseGuards(new role_gurad_1.RoleGuard(app_interface_1.RoleAccount.Admin, app_interface_1.RoleAccount.Pharmacy)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ActTypeListController.prototype, "ActAll", null);
__decorate([
    common_1.Delete('act/:id_act'),
    common_1.UseGuards(new role_gurad_1.RoleGuard(app_interface_1.RoleAccount.Admin, app_interface_1.RoleAccount.Pharmacy)),
    __param(0, common_1.Param(new validation_pipe_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [act_entity_1.ParamDeleteAct]),
    __metadata("design:returntype", void 0)
], ActTypeListController.prototype, "deleteReceiptDetail", null);
__decorate([
    common_1.Post('act'),
    common_1.UseGuards(new role_gurad_1.RoleGuard(app_interface_1.RoleAccount.Admin, app_interface_1.RoleAccount.Pharmacy)),
    __param(0, common_1.Body(new validation_pipe_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [act_entity_1.ParamAct]),
    __metadata("design:returntype", void 0)
], ActTypeListController.prototype, "addAct", null);
__decorate([
    common_1.Get("type_in_act/:id_act"),
    common_1.UseGuards(new role_gurad_1.RoleGuard(app_interface_1.RoleAccount.Admin, app_interface_1.RoleAccount.Pharmacy)),
    __param(0, common_1.Param(new validation_pipe_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [fees_type_entity_1.ParamTypeInAct]),
    __metadata("design:returntype", void 0)
], ActTypeListController.prototype, "TypeInAct", null);
__decorate([
    common_1.Delete('type_in_act/:id_type'),
    common_1.UseGuards(new role_gurad_1.RoleGuard(app_interface_1.RoleAccount.Admin, app_interface_1.RoleAccount.Pharmacy)),
    __param(0, common_1.Param(new validation_pipe_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [fees_type_entity_1.ParamDeleteType]),
    __metadata("design:returntype", void 0)
], ActTypeListController.prototype, "deleteTypeInAct", null);
__decorate([
    common_1.Post('type_in_act/type'),
    common_1.UseGuards(new role_gurad_1.RoleGuard(app_interface_1.RoleAccount.Admin, app_interface_1.RoleAccount.Pharmacy)),
    __param(0, common_1.Body(new validation_pipe_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [fees_type_entity_1.ParamType]),
    __metadata("design:returntype", void 0)
], ActTypeListController.prototype, "addType", null);
__decorate([
    common_1.Get("list_in_type/:id_type"),
    common_1.UseGuards(new role_gurad_1.RoleGuard(app_interface_1.RoleAccount.Admin, app_interface_1.RoleAccount.Pharmacy)),
    __param(0, common_1.Param(new validation_pipe_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [fees_type_entity_1.ParamListInType]),
    __metadata("design:returntype", void 0)
], ActTypeListController.prototype, "ListInType", null);
__decorate([
    common_1.Delete('list_in_type/:id_list'),
    common_1.UseGuards(new role_gurad_1.RoleGuard(app_interface_1.RoleAccount.Admin, app_interface_1.RoleAccount.Pharmacy)),
    __param(0, common_1.Param(new validation_pipe_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [fees_type_entity_1.ParamDeleteList]),
    __metadata("design:returntype", void 0)
], ActTypeListController.prototype, "deleteList", null);
__decorate([
    common_1.Post('list_in_type/list'),
    common_1.UseGuards(new role_gurad_1.RoleGuard(app_interface_1.RoleAccount.Admin, app_interface_1.RoleAccount.Pharmacy)),
    __param(0, common_1.Body(new validation_pipe_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [fees_type_entity_1.ParamList]),
    __metadata("design:returntype", void 0)
], ActTypeListController.prototype, "addList", null);
ActTypeListController = __decorate([
    common_1.Controller('act_type_list'),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    __metadata("design:paramtypes", [act_type_list_service_1.ActTypeListService])
], ActTypeListController);
exports.ActTypeListController = ActTypeListController;
//# sourceMappingURL=act_type_list.controller.js.map