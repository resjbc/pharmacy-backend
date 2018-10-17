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
const person_entity_1 = require("./person.entity");
let EReceipt = class EReceipt {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Object)
], EReceipt.prototype, "id_receipt", void 0);
__decorate([
    typeorm_1.Column({ name: 'id_person', nullable: true }),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], EReceipt.prototype, "id_person", void 0);
__decorate([
    typeorm_1.Column({ name: 'id_member_create', nullable: true }),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], EReceipt.prototype, "id_member_create", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], EReceipt.prototype, "place", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], EReceipt.prototype, "place_address", void 0);
__decorate([
    typeorm_1.Column(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Date)
], EReceipt.prototype, "date_created", void 0);
__decorate([
    typeorm_1.Column(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Date)
], EReceipt.prototype, "date_updated", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], EReceipt.prototype, "id_reference", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], EReceipt.prototype, "id_receipt_cash", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], EReceipt.prototype, "id_receipt_cash_number", void 0);
__decorate([
    typeorm_1.Column({ name: 'id_member_cash', nullable: true }),
    __metadata("design:type", Number)
], EReceipt.prototype, "id_member_cash", void 0);
__decorate([
    typeorm_1.OneToMany(type => EReceiptDetail, receiptDetail => receiptDetail.receipt),
    __metadata("design:type", Array)
], EReceipt.prototype, "receiptDetails", void 0);
__decorate([
    typeorm_1.ManyToOne(type => person_entity_1.EPerson, person => person.receipts, {
        nullable: true,
        onDelete: "SET NULL"
    }),
    typeorm_1.JoinColumn({ name: 'id_person' }),
    __metadata("design:type", person_entity_1.EPerson)
], EReceipt.prototype, "person", void 0);
__decorate([
    typeorm_1.ManyToOne(type => person_entity_1.EPerson, person => person.receipts, {
        nullable: true,
        onDelete: "SET NULL"
    }),
    typeorm_1.JoinColumn({ name: 'id_member_create' }),
    __metadata("design:type", person_entity_1.EPerson)
], EReceipt.prototype, "member_create", void 0);
__decorate([
    typeorm_1.ManyToOne(type => person_entity_1.EPerson, person => person.receipts, {
        nullable: true,
        onDelete: "SET NULL"
    }),
    typeorm_1.JoinColumn({ name: 'id_member_cash' }),
    __metadata("design:type", person_entity_1.EPerson)
], EReceipt.prototype, "member_cash", void 0);
EReceipt = __decorate([
    typeorm_1.Entity('Receipt')
], EReceipt);
exports.EReceipt = EReceipt;
let EReceiptDetail = class EReceiptDetail {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Object)
], EReceiptDetail.prototype, "id_receipt_detail", void 0);
__decorate([
    typeorm_1.Column('id_receipt'),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], EReceiptDetail.prototype, "id_receipt", void 0);
__decorate([
    typeorm_1.Column(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], EReceiptDetail.prototype, "id_list", void 0);
__decorate([
    typeorm_1.Column('text'),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], EReceiptDetail.prototype, "description", void 0);
__decorate([
    typeorm_1.Column('text'),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], EReceiptDetail.prototype, "type", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], EReceiptDetail.prototype, "qty", void 0);
__decorate([
    typeorm_1.Column(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], EReceiptDetail.prototype, "price", void 0);
__decorate([
    typeorm_1.ManyToOne(type => EReceipt, receipt => receipt.receiptDetails, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    }),
    typeorm_1.JoinColumn({ name: 'id_receipt' }),
    __metadata("design:type", EReceipt)
], EReceiptDetail.prototype, "receipt", void 0);
EReceiptDetail = __decorate([
    typeorm_1.Entity('ReceiptDetail')
], EReceiptDetail);
exports.EReceiptDetail = EReceiptDetail;
class ParamReceipt {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsNumberString(),
    __metadata("design:type", Object)
], ParamReceipt.prototype, "id_reference", void 0);
exports.ParamReceipt = ParamReceipt;
class ParamReceiptPerson {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsNumberString(),
    __metadata("design:type", Object)
], ParamReceiptPerson.prototype, "cid", void 0);
exports.ParamReceiptPerson = ParamReceiptPerson;
class QueryReceipt {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Object)
], QueryReceipt.prototype, "myDateStart", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Object)
], QueryReceipt.prototype, "myDateEnd", void 0);
exports.QueryReceipt = QueryReceipt;
class QueryReceiptCash {
}
exports.QueryReceiptCash = QueryReceiptCash;
class ParamReceiptDetail {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], ParamReceiptDetail.prototype, "id_list", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], ParamReceiptDetail.prototype, "description", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], ParamReceiptDetail.prototype, "price", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], ParamReceiptDetail.prototype, "type", void 0);
exports.ParamReceiptDetail = ParamReceiptDetail;
class ParamInsertReceipt {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Object)
], ParamInsertReceipt.prototype, "id_person", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Object)
], ParamInsertReceipt.prototype, "id_member_create", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Date)
], ParamInsertReceipt.prototype, "date_created", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Date)
], ParamInsertReceipt.prototype, "date_updated", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Array)
], ParamInsertReceipt.prototype, "receiptDetails", void 0);
exports.ParamInsertReceipt = ParamInsertReceipt;
class ParamUpdateCashReceipt {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Object)
], ParamUpdateCashReceipt.prototype, "id_receipt", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Object)
], ParamUpdateCashReceipt.prototype, "id_receipt_cash", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Object)
], ParamUpdateCashReceipt.prototype, "id_receipt_cash_number", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Object)
], ParamUpdateCashReceipt.prototype, "id_member_cash", void 0);
exports.ParamUpdateCashReceipt = ParamUpdateCashReceipt;
class ParamDeleteReceiptDetail {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsNumberString(),
    __metadata("design:type", Object)
], ParamDeleteReceiptDetail.prototype, "id_receipt_detail", void 0);
exports.ParamDeleteReceiptDetail = ParamDeleteReceiptDetail;
//# sourceMappingURL=receipt.entity.js.map