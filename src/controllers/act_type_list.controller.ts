import { Controller, Get, Param, Delete, Post, Body, UseGuards } from "@nestjs/common";
import { ActTypeListService } from "services/act_type_list.service";
import { ParamTypeInAct, ParamListInType, ParamType, ParamDeleteType, ParamDeleteList, ParamList } from "../models/entitys/fees-type.entity";
import { ValidationPipe } from "../pipes/validation.pipe";
import { ParamAct, ParamDeleteAct } from "../models/entitys/act.entity";
import { AuthGuard } from "@nestjs/passport";


@Controller('act_type_list')
@UseGuards(AuthGuard('jwt'))
export class ActTypeListController {
    constructor(private readonly act_type_listService: ActTypeListService) { }

    @Get("act")
    ActAll() {
        return this.act_type_listService.getActs();
    }

    @Delete('act/:id_act')
    deleteReceiptDetail(@Param(new ValidationPipe()) param: ParamDeleteAct) {
      return this.act_type_listService.deleteAct(param);
    }

    @Post('act')
    addAct(@Body(new ValidationPipe()) body: ParamAct) {
      return this.act_type_listService.addAct(body);
    }

    @Get("type_in_act/:id_act")
    TypeInAct(@Param(new ValidationPipe()) param: ParamTypeInAct) {
        return this.act_type_listService.TypeInAct(param.id_act);
    }

    @Delete('type_in_act/:id_type')
    deleteTypeInAct(@Param(new ValidationPipe()) param: ParamDeleteType) {
      return this.act_type_listService.deleteType(param);
    }

    @Post('type_in_act/type')
    addType(@Body(new ValidationPipe()) body: ParamType) {
      return this.act_type_listService.addType(body);
    }

    @Get("list_in_type/:id_type")
    ListInType(@Param(new ValidationPipe()) param: ParamListInType) {
        return this.act_type_listService.ListInType(param.id_type);
    }

    @Delete('list_in_type/:id_list')
    deleteList(@Param(new ValidationPipe()) param: ParamDeleteList) {
      return this.act_type_listService.deleteList(param);
    }

    @Post('list_in_type/list')
    addList(@Body(new ValidationPipe()) body: ParamList) {
      return this.act_type_listService.addList(body);
    }
}