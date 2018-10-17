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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const app_interface_1 = require("../../interfaces/app.interface");
const class_validator_1 = require("class-validator");
const receipt_entity_1 = require("./receipt.entity");
const place_entity_1 = require("./place.entity");
const validation_pipe_1 = require("../../pipes/validation.pipe");
let EPerson = class EPerson {
    constructor() {
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Object)
], EPerson.prototype, "id_person", void 0);
__decorate([
    typeorm_1.Column(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], EPerson.prototype, "cid", void 0);
__decorate([
    typeorm_1.Column(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], EPerson.prototype, "firstname", void 0);
__decorate([
    typeorm_1.Column(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], EPerson.prototype, "lastname", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], EPerson.prototype, "address", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], EPerson.prototype, "mobile", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], EPerson.prototype, "username", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], EPerson.prototype, "password", void 0);
__decorate([
    typeorm_1.Column(),
    class_validator_1.IsNotEmpty(),
    validation_pipe_1.IsRoleAccount(),
    __metadata("design:type", Number)
], EPerson.prototype, "role", void 0);
__decorate([
    typeorm_1.OneToMany(type => receipt_entity_1.EReceipt, receipt => receipt.person, { nullable: true }),
    __metadata("design:type", Array)
], EPerson.prototype, "receipts", void 0);
__decorate([
    typeorm_1.OneToMany(type => place_entity_1.EPlace, place => place.person, { nullable: true }),
    __metadata("design:type", Array)
], EPerson.prototype, "places", void 0);
EPerson = __decorate([
    typeorm_1.Unique(["cid"]),
    typeorm_1.Entity('Person'),
    __metadata("design:paramtypes", [])
], EPerson);
exports.EPerson = EPerson;
class ParamPerson {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsNumberString(),
    __metadata("design:type", Object)
], ParamPerson.prototype, "pid", void 0);
exports.ParamPerson = ParamPerson;
class ParamAddPerson {
}
__decorate([
    class_validator_1.Matches(/^[0-9]{13,13}$/),
    __metadata("design:type", Object)
], ParamAddPerson.prototype, "cid", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], ParamAddPerson.prototype, "firstname", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], ParamAddPerson.prototype, "lastname", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    validation_pipe_1.IsRoleAccount(),
    __metadata("design:type", Number)
], ParamAddPerson.prototype, "role", void 0);
exports.ParamAddPerson = ParamAddPerson;
class ParamDeletePerson {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsNumberString(),
    __metadata("design:type", Object)
], ParamDeletePerson.prototype, "id_person", void 0);
exports.ParamDeletePerson = ParamDeletePerson;
class ParamLogin {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], ParamLogin.prototype, "username", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], ParamLogin.prototype, "password", void 0);
exports.ParamLogin = ParamLogin;
class ParamChangePassword {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], ParamChangePassword.prototype, "old_pass", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.Matches(/^[A-z0-9]{6,15}$/),
    __metadata("design:type", String)
], ParamChangePassword.prototype, "new_pass", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    validation_pipe_1.IsComparePassword('new_pass'),
    __metadata("design:type", String)
], ParamChangePassword.prototype, "cnew_pass", void 0);
exports.ParamChangePassword = ParamChangePassword;
//# sourceMappingURL=person.entity.js.map