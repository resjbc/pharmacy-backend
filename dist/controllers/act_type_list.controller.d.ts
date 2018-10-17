import { ActTypeListService } from "services/act_type_list.service";
import { ParamTypeInAct, ParamListInType, ParamType, ParamDeleteType, ParamDeleteList, ParamList } from "../models/entitys/fees-type.entity";
import { ParamAct, ParamDeleteAct } from "../models/entitys/act.entity";
export declare class ActTypeListController {
    private readonly act_type_listService;
    constructor(act_type_listService: ActTypeListService);
    ActAll(): Promise<import("models/entitys/act.entity").EAct[]>;
    deleteReceiptDetail(param: ParamDeleteAct): Promise<import("typeorm/query-builder/result/DeleteResult").DeleteResult>;
    addAct(body: ParamAct): Promise<any>;
    TypeInAct(param: ParamTypeInAct): Promise<import("models/entitys/fees-type.entity").ETypeFees[]>;
    deleteTypeInAct(param: ParamDeleteType): Promise<import("typeorm/query-builder/result/DeleteResult").DeleteResult>;
    addType(body: ParamType): Promise<any>;
    ListInType(param: ParamListInType): Promise<import("models/entitys/fees-type.entity").EListFees[]>;
    deleteList(param: ParamDeleteList): Promise<import("typeorm/query-builder/result/DeleteResult").DeleteResult>;
    addList(body: ParamList): Promise<any>;
}
