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
const person_entity_1 = require("../models/entitys/person.entity");
const person_service_1 = require("../services/person.service");
const passport_1 = require("@nestjs/passport");
const role_gurad_1 = require("../guards/role.gurad");
const app_interface_1 = require("../interfaces/app.interface");
let PersonController = class PersonController {
    constructor(personService) {
        this.personService = personService;
        this.personService.addPerson({
            id_person: 1,
            cid: "9999999999999",
            firstname: "ADMIN",
            lastname: "SSJ",
            address: "",
            mobile: "",
            username: "admin",
            password: "adminssj",
            role: 4
        });
    }
    getPersons() {
        return this.personService.getPersons();
    }
    getPersons_Admin() {
        return this.personService.getPersons_Admin();
    }
    findPerson(param) {
        return this.personService.getPerson(param.pid);
    }
    addPerson(body) {
        return this.personService.addPerson(body);
    }
    deleteReceiptDetail(param) {
        return this.personService.deletePerson(param);
    }
};
__decorate([
    common_1.Get('employee'),
    common_1.UseGuards(new role_gurad_1.RoleGuard(app_interface_1.RoleAccount.Admin, app_interface_1.RoleAccount.Pharmacy)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PersonController.prototype, "getPersons", null);
__decorate([
    common_1.Get(),
    common_1.UseGuards(new role_gurad_1.RoleGuard(app_interface_1.RoleAccount.Admin)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PersonController.prototype, "getPersons_Admin", null);
__decorate([
    common_1.Get(':pid'),
    common_1.UseGuards(new role_gurad_1.RoleGuard(app_interface_1.RoleAccount.Admin, app_interface_1.RoleAccount.Pharmacy, app_interface_1.RoleAccount.Cash)),
    __param(0, common_1.Param(new validation_pipe_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [person_entity_1.ParamPerson]),
    __metadata("design:returntype", void 0)
], PersonController.prototype, "findPerson", null);
__decorate([
    common_1.Post('add'),
    common_1.UseGuards(new role_gurad_1.RoleGuard(app_interface_1.RoleAccount.Admin, app_interface_1.RoleAccount.Pharmacy, app_interface_1.RoleAccount.Cash)),
    __param(0, common_1.Body(new validation_pipe_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [person_entity_1.ParamAddPerson]),
    __metadata("design:returntype", void 0)
], PersonController.prototype, "addPerson", null);
__decorate([
    common_1.Delete(':id_person'),
    common_1.UseGuards(new role_gurad_1.RoleGuard(app_interface_1.RoleAccount.Admin, app_interface_1.RoleAccount.Pharmacy, app_interface_1.RoleAccount.Cash)),
    __param(0, common_1.Param(new validation_pipe_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [person_entity_1.ParamDeletePerson]),
    __metadata("design:returntype", void 0)
], PersonController.prototype, "deleteReceiptDetail", null);
PersonController = __decorate([
    common_1.Controller('person'),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    __metadata("design:paramtypes", [person_service_1.PersonService])
], PersonController);
exports.PersonController = PersonController;
//# sourceMappingURL=person.controller.js.map