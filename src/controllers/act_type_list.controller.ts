import { Controller, Get, Param } from "@nestjs/common";
import { ActTypeListService } from "services/act_type_list.service";
import { ParamTypeInAct, ParamListInType } from "../models/entitys/fees-type.entity";
import { ValidationPipe } from "../pipes/validation.pipe";

@Controller('act_type_list')
export class ActTypeListController {
    constructor(private readonly act_type_listService: ActTypeListService) { }

    @Get("act")
    ActAll() {
        return this.act_type_listService.Act();
    }

    @Get("type_in_act/:id_act")
    TypeInAct(@Param(new ValidationPipe()) param: ParamTypeInAct) {
        return this.act_type_listService.TypeInAct(param.id_act);
    }

    @Get("list_in_type/:id_type")
    ListInType(@Param(new ValidationPipe()) param: ParamListInType) {
        return this.act_type_listService.ListInType(param.id_type);
    }
}