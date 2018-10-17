import { EAct } from "../models/entitys/act.entity";
import { Repository } from "typeorm";
import { ETypeFees, EListFees } from "../models/entitys/fees-type.entity";
export declare class ActTypeListService {
    private readonly actRepository;
    private readonly typeFeesRepository;
    private readonly listFeesRepository;
    constructor(actRepository: Repository<EAct>, typeFeesRepository: Repository<ETypeFees>, listFeesRepository: Repository<EListFees>);
    getActs(): Promise<EAct[]>;
    addAct(act: any): Promise<any>;
    deleteAct(act: any): Promise<import("typeorm/query-builder/result/DeleteResult").DeleteResult>;
    TypeInAct(id_act: number): Promise<ETypeFees[]>;
    deleteType(type: any): Promise<import("typeorm/query-builder/result/DeleteResult").DeleteResult>;
    addType(type: any): Promise<any>;
    ListInType(id_type: number): Promise<EListFees[]>;
    deleteList(list: any): Promise<import("typeorm/query-builder/result/DeleteResult").DeleteResult>;
    addList(list: any): Promise<any>;
}
