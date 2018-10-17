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
const person_entity_1 = require("../models/entitys/person.entity");
const jwt_authen_service_1 = require("./jwt-authen.service");
let AccountService = class AccountService {
    constructor(personRepository, authenService) {
        this.personRepository = personRepository;
        this.authenService = authenService;
    }
    onLogin(login) {
        return __awaiter(this, void 0, void 0, function* () {
            const person = yield this.personRepository
                .createQueryBuilder('person')
                .select()
                .where("person.username = :username", { username: login.username })
                .getOne();
            if (!person)
                throw new common_1.BadRequestException('ไม่มีผู้ใช้งานนี้ในระบบ');
            if (login.password !== person.password)
                throw new common_1.BadRequestException('ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง');
            person.password = "";
            return { accessToken: yield this.authenService.generateAccessToken(person) };
        });
    }
    onChangePassword(id_person, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const memberItem = yield this.personRepository.findOne({ id_person: id_person });
            if (body.old_pass != memberItem.password)
                throw new common_1.BadRequestException('รหัสผ่านเดิมไม่ถูกต้อง');
            const updated = yield this.personRepository.update({ id_person: id_person }, {
                password: body.new_pass
            });
            return updated;
        });
    }
};
AccountService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(person_entity_1.EPerson)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_authen_service_1.JwtAuthenService])
], AccountService);
exports.AccountService = AccountService;
//# sourceMappingURL=account.service.js.map