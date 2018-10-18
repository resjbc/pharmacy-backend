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
const person_entity_1 = require("../models/entitys/person.entity");
const typeorm_2 = require("typeorm");
let PersonService = class PersonService {
    constructor(personRepository) {
        this.personRepository = personRepository;
    }
    getPerson(pid) {
        return __awaiter(this, void 0, void 0, function* () {
            const person = yield this.personRepository
                .createQueryBuilder('person')
                .select()
                .where("person.cid = :pid", { pid: pid })
                .getOne();
            if (!person)
                throw new common_1.BadRequestException('ไม่มีบุคคลนี้ในระบบ');
            person["username"] = "";
            person["password"] = "";
            return person;
        });
    }
    getPersons() {
        return __awaiter(this, void 0, void 0, function* () {
            const persons = yield this.personRepository.createQueryBuilder('person')
                .select().where("role != 4").orderBy("person.id_person", "DESC").getMany();
            if (!persons)
                throw new common_1.BadRequestException('ไม่มีบุคคลในระบบ');
            return persons;
        });
    }
    getPersons_Admin() {
        return __awaiter(this, void 0, void 0, function* () {
            const persons = yield this.personRepository.createQueryBuilder('person')
                .select().orderBy("person.id_person", "DESC").getMany();
            if (!persons)
                throw new common_1.BadRequestException('ไม่มีบุคคลในระบบ');
            return persons;
        });
    }
    addPerson(person) {
        return __awaiter(this, void 0, void 0, function* () {
            if (person.username) {
                const person_ = yield this.personRepository.findOne({ username: person.username });
                if (person_ && person_.cid !== person.cid)
                    throw new common_1.BadRequestException("username นี้มีผู้ใช้แล้ว");
            }
            const person_ = yield this.personRepository.findOne({ cid: person.cid });
            if (person_ && person_.id_person !== person.id_person)
                throw new common_1.BadRequestException("มีหมายเลขบัตรประชาชนนี้ในระบบแล้ว");
            const member = yield this.personRepository.save(person);
            return member;
        });
    }
    deletePerson(person) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.personRepository.delete(person)
                .catch(err => { throw new common_1.BadRequestException(err); });
            ;
        });
    }
    firstStart(person) {
        return __awaiter(this, void 0, void 0, function* () {
            const person_ = yield this.personRepository.findOne({ cid: person.cid });
            if (!person_)
                yield this.personRepository.save(person);
        });
    }
};
PersonService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(person_entity_1.EPerson)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PersonService);
exports.PersonService = PersonService;
//# sourceMappingURL=person.service.js.map