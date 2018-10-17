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
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const act_entity_1 = require("../models/entitys/act.entity");
const typeorm_2 = require("typeorm");
const fees_type_entity_1 = require("../models/entitys/fees-type.entity");
let ActTypeListService = class ActTypeListService {
    constructor(actRepository, typeFeesRepository, listFeesRepository) {
        this.actRepository = actRepository;
        this.typeFeesRepository = typeFeesRepository;
        this.listFeesRepository = listFeesRepository;
    }
    getActs() {
        return __awaiter(this, void 0, void 0, function* () {
            const act_item = yield this.actRepository
                .createQueryBuilder('act')
                .select().orderBy("id_act", "DESC")
                .getMany();
            if (!act_item)
                throw new common_1.BadRequestException('ไม่มีรายการพรบในระบบ');
            return act_item;
        });
    }
    addAct(act) {
        return __awaiter(this, void 0, void 0, function* () {
            const act_ = yield this.actRepository.save(act).catch(err => { throw new common_1.BadRequestException("มี พรบ ในระบบแล้ว"); });
            return act_;
        });
    }
    deleteAct(act) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.actRepository.delete(act)
                .catch(err => { throw new common_1.BadRequestException(err); });
            ;
        });
    }
    TypeInAct(id_act) {
        return __awaiter(this, void 0, void 0, function* () {
            const type_in_act_item = yield this.typeFeesRepository
                .createQueryBuilder('typefees')
                .select(["typefees.id_type", "typefees.description"])
                .where("typefees.id_act = :id_act", { id_act: id_act })
                .getMany();
            if (type_in_act_item.length == 0)
                throw new common_1.BadRequestException('ไม่มีประเภทค่าธรรมเนียมใน พรบ นี้');
            return type_in_act_item;
        });
    }
    deleteType(type) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.typeFeesRepository.delete(type)
                .catch(err => { throw new common_1.BadRequestException(err); });
            ;
        });
    }
    addType(type) {
        return __awaiter(this, void 0, void 0, function* () {
            const type_ = yield this.typeFeesRepository.save(type).catch(err => { throw new common_1.BadRequestException("มี พรบ นี้ในระบบแล้ว"); });
            return type_;
        });
    }
    ListInType(id_type) {
        return __awaiter(this, void 0, void 0, function* () {
            const list_in_type_item = yield this.listFeesRepository
                .createQueryBuilder('list')
                .select(["list.id_list", "list.description", "list.price"])
                .where("list.id_type = :id_type", { id_type: id_type })
                .getMany();
            if (list_in_type_item.length == 0)
                throw new common_1.BadRequestException('ไม่มีรายการในประเภทค่าธรรมเนียมนี้');
            return list_in_type_item;
        });
    }
    deleteList(list) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.listFeesRepository.delete(list)
                .catch(err => { throw new common_1.BadRequestException(err); });
        });
    }
    addList(list) {
        return __awaiter(this, void 0, void 0, function* () {
            const list_ = yield this.listFeesRepository.save(list).catch(err => { throw new common_1.BadRequestException("มีรายการนี้ในระบบแล้ว"); });
            return list_;
        });
    }
};
ActTypeListService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(act_entity_1.EAct)),
    __param(1, typeorm_1.InjectRepository(fees_type_entity_1.ETypeFees)),
    __param(2, typeorm_1.InjectRepository(fees_type_entity_1.EListFees)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ActTypeListService);
exports.ActTypeListService = ActTypeListService;
//# sourceMappingURL=act_type_list.service.js.map