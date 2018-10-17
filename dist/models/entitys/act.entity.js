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
const fees_type_entity_1 = require("./fees-type.entity");
let EAct = class EAct {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], EAct.prototype, "id_act", void 0);
__decorate([
    typeorm_1.Column('text'),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], EAct.prototype, "description", void 0);
__decorate([
    typeorm_1.OneToMany(type => fees_type_entity_1.ETypeFees, typefees => typefees.act, { nullable: false }),
    __metadata("design:type", Array)
], EAct.prototype, "typefees_s", void 0);
EAct = __decorate([
    typeorm_1.Unique(["description"]),
    typeorm_1.Entity('Act')
], EAct);
exports.EAct = EAct;
class ParamDeleteAct {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsNumberString(),
    __metadata("design:type", Object)
], ParamDeleteAct.prototype, "id_act", void 0);
exports.ParamDeleteAct = ParamDeleteAct;
class ParamAct {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], ParamAct.prototype, "description", void 0);
exports.ParamAct = ParamAct;
//# sourceMappingURL=act.entity.js.map