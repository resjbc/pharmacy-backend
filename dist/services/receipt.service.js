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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const receipt_entity_1 = require("../models/entitys/receipt.entity");
let ReceiptService = class ReceiptService {
    constructor(receiptRepository, receipt_detailRepository) {
        this.receiptRepository = receiptRepository;
        this.receipt_detailRepository = receipt_detailRepository;
    }
    findReceiptDate(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const receipts = yield this.receiptRepository
                .createQueryBuilder('receipt')
                .select([
                "person.firstname",
                "person.lastname",
                "person.cid",
                "receipt.date_created",
                "receipt.id_reference",
                "receipt.id_receipt_cash",
                "receipt.id_receipt_cash_number"
            ])
                .leftJoin("receipt.person", "person")
                .leftJoin("receipt.member_create", "member_create")
                .leftJoin("receipt.member_cash", "member_cash")
                .andWhere("receipt.date_created::DATE BETWEEN :start::DATE AND :end::DATE")
                .setParameter("start", query.myDateStart)
                .setParameter("end", query.myDateEnd)
                .getMany();
            return receipts;
        });
    }
    findReceiptPerson(param) {
        return __awaiter(this, void 0, void 0, function* () {
            const receipts = yield this.receiptRepository
                .createQueryBuilder('receipt')
                .select([
                "person.firstname",
                "person.lastname",
                "person.cid",
                "receipt.date_created",
                "receipt.id_reference",
                "receipt.id_receipt_cash",
                "receipt.id_receipt_cash_number"
            ])
                .leftJoin("receipt.person", "person")
                .leftJoin("receipt.member_create", "member_create")
                .leftJoin("receipt.member_cash", "member_cash")
                .andWhere("person.cid =  :cid")
                .setParameter("cid", param.cid)
                .getMany();
            return receipts;
        });
    }
    findReceipt(id_reference) {
        return __awaiter(this, void 0, void 0, function* () {
            const receipt_item = yield this.receiptRepository
                .createQueryBuilder('receipt')
                .select(["person.firstname",
                "person.lastname",
                "person.cid",
                "person.address",
                "person.mobile",
                "receipt.place",
                "receipt.place_address",
                "receipt.date_created",
                "receipt.id_receipt",
                "receipt.id_reference",
                "receipt.id_receipt_cash",
                "receipt.id_receipt_cash_number",
                "receiptDetail.id_receipt_detail",
                "receiptDetail.description",
                "receiptDetail.type",
                "receiptDetail.price",
                "member_create.firstname",
                "member_create.lastname",
                "member_cash.firstname",
                "member_cash.lastname"
            ])
                .leftJoin("receipt.person", "person")
                .leftJoin("receipt.member_create", "member_create")
                .leftJoin("receipt.member_cash", "member_cash")
                .leftJoin("receipt.receiptDetails", "receiptDetail")
                .where("receipt.id_reference = :id", { id: id_reference })
                .getOne();
            if (!receipt_item)
                throw new common_1.BadRequestException('ไม่มีรายการนี้ในระบบ');
            return receipt_item;
        });
    }
    insertReceipt(receipts) {
        return __awaiter(this, void 0, void 0, function* () {
            let receipt = receipts;
            let receiptDetailss = receipts["receiptDetails"];
            delete receipt.receiptDetails;
            let year = new Date().getFullYear();
            receipt = yield this.receiptRepository.save(receipt).catch(err => { throw new common_1.BadRequestException('receiptRepository1'); });
            receipt.id_reference = year + "" + receipt.id_receipt;
            receipt = yield this.receiptRepository.save(receipt).catch(err => { throw new common_1.BadRequestException('receiptRepository2'); });
            const receiptDetails = receiptDetailss.map((receiptDetail) => {
                receiptDetail.id_receipt = receipt.id_receipt;
                return receiptDetail;
            });
            const receipt_details = yield this.receipt_detailRepository.save(receiptDetails).catch(err => { throw new common_1.BadRequestException('receipt_detailRepository'); });
            receipt.receiptDetails = receipt_details;
            return receipt;
        });
    }
    deleteReceiptDetail(receipt_detail) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.receipt_detailRepository.delete(receipt_detail);
        });
    }
    updateReceipt(receipt) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.receiptRepository.save(receipt);
        });
    }
    findReceiptCash(query) {
        return __awaiter(this, void 0, void 0, function* () {
            let findReceipt_ = () => this.receiptRepository
                .createQueryBuilder('receipt')
                .select([
                "person.firstname",
                "person.lastname",
                "person.cid",
                "receipt.date_created",
                "receipt.id_reference",
                "receipt.id_receipt_cash",
                "receipt.id_receipt_cash_number"
            ])
                .leftJoin("receipt.person", "person")
                .leftJoin("receipt.member_create", "member_create")
                .leftJoin("receipt.member_cash", "member_cash");
            if (query.id_receipt_cash && query.id_receipt_cash_number) {
                return yield findReceipt_()
                    .where("receipt.id_receipt_cash = :id_receipt_cash", { id_receipt_cash: query.id_receipt_cash })
                    .andWhere("receipt.id_receipt_cash_number = :id_receipt_cash_number", { id_receipt_cash_number: query.id_receipt_cash_number }).getMany();
            }
            else if (query.id_receipt_cash_number) {
                return yield findReceipt_()
                    .where("receipt.id_receipt_cash_number = :id_receipt_cash_number", { id_receipt_cash_number: query.id_receipt_cash_number }).getMany();
            }
            else if (query.id_receipt_cash) {
                return yield findReceipt_()
                    .where("receipt.id_receipt_cash = :id_receipt_cash", { id_receipt_cash: query.id_receipt_cash }).getMany();
            }
            else
                throw new common_1.BadRequestException('ใส่เลขที่ใบเสร็จหรือเล่มที่');
        });
    }
};
ReceiptService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(receipt_entity_1.EReceipt)),
    __param(1, typeorm_1.InjectRepository(receipt_entity_1.EReceiptDetail)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ReceiptService);
exports.ReceiptService = ReceiptService;
//# sourceMappingURL=receipt.service.js.map