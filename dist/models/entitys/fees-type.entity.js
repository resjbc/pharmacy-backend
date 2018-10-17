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
const class_validator_1 = require("class-validator");
const act_entity_1 = require("./act.entity");
let ETypeFees = class ETypeFees {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ETypeFees.prototype, "id_type", void 0);
__decorate([
    typeorm_1.Column({ name: 'id_act', nullable: true }),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], ETypeFees.prototype, "id_act", void 0);
__decorate([
    typeorm_1.Column('text'),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], ETypeFees.prototype, "description", void 0);
__decorate([
    typeorm_1.ManyToOne(type => act_entity_1.EAct, act => act.typefees_s, {
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
    }),
    typeorm_1.JoinColumn({ name: 'id_act' }),
    __metadata("design:type", act_entity_1.EAct)
], ETypeFees.prototype, "act", void 0);
ETypeFees = __decorate([
    typeorm_1.Unique(["id_act", "description"]),
    typeorm_1.Entity('TypeFees')
], ETypeFees);
exports.ETypeFees = ETypeFees;
let EListFees = class EListFees {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], EListFees.prototype, "id_list", void 0);
__decorate([
    typeorm_1.Column(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], EListFees.prototype, "id_type", void 0);
__decorate([
    typeorm_1.Column('text'),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], EListFees.prototype, "description", void 0);
__decorate([
    typeorm_1.Column('text'),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], EListFees.prototype, "price", void 0);
EListFees = __decorate([
    typeorm_1.Unique(["id_type", "description", "price"]),
    typeorm_1.Entity('ListFees')
], EListFees);
exports.EListFees = EListFees;
class ParamTypeInAct {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsNumberString(),
    __metadata("design:type", Object)
], ParamTypeInAct.prototype, "id_act", void 0);
exports.ParamTypeInAct = ParamTypeInAct;
class ParamListInType {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsNumberString(),
    __metadata("design:type", Object)
], ParamListInType.prototype, "id_type", void 0);
exports.ParamListInType = ParamListInType;
class ParamDeleteList {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], ParamDeleteList.prototype, "id_list", void 0);
exports.ParamDeleteList = ParamDeleteList;
class ParamList {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], ParamList.prototype, "id_type", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], ParamList.prototype, "description", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], ParamList.prototype, "price", void 0);
exports.ParamList = ParamList;
class ParamType {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], ParamType.prototype, "description", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], ParamType.prototype, "id_act", void 0);
exports.ParamType = ParamType;
class ParamDeleteType {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Object)
], ParamDeleteType.prototype, "id_type", void 0);
exports.ParamDeleteType = ParamDeleteType;
//# sourceMappingURL=fees-type.entity.js.map