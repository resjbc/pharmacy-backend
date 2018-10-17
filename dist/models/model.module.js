"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const receipt_entity_1 = require("./entitys/receipt.entity");
const act_entity_1 = require("./entitys/act.entity");
const fees_type_entity_1 = require("./entitys/fees-type.entity");
const receipt_service_1 = require("../services/receipt.service");
const receipt_controller_1 = require("../controllers/receipt.controller");
const person_entity_1 = require("./entitys/person.entity");
const act_type_list_service_1 = require("../services/act_type_list.service");
const act_type_list_controller_1 = require("../controllers/act_type_list.controller");
const person_controller_1 = require("../controllers/person.controller");
const person_service_1 = require("../services/person.service");
const account_controller_1 = require("../controllers/account.controller");
const account_service_1 = require("../services/account.service");
const jwt_authen_service_1 = require("../services/jwt-authen.service");
let ModelsModule = class ModelsModule {
};
ModelsModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([receipt_entity_1.EReceipt]),
            typeorm_1.TypeOrmModule.forFeature([receipt_entity_1.EReceiptDetail]),
            typeorm_1.TypeOrmModule.forFeature([act_entity_1.EAct]),
            typeorm_1.TypeOrmModule.forFeature([fees_type_entity_1.ETypeFees]),
            typeorm_1.TypeOrmModule.forFeature([fees_type_entity_1.EListFees]),
            typeorm_1.TypeOrmModule.forFeature([person_entity_1.EPerson]),
        ],
        providers: [
            receipt_service_1.ReceiptService,
            act_type_list_service_1.ActTypeListService,
            person_service_1.PersonService,
            account_service_1.AccountService,
            jwt_authen_service_1.JwtAuthenService,
            jwt_authen_service_1.JwtAuthenStrategy
        ],
        controllers: [
            receipt_controller_1.ReceiptController,
            act_type_list_controller_1.ActTypeListController,
            person_controller_1.PersonController,
            account_controller_1.AccountController
        ],
    })
], ModelsModule);
exports.ModelsModule = ModelsModule;
//# sourceMappingURL=model.module.js.map