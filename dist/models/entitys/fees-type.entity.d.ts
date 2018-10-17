import { ITypeFees, IListFees } from "../../interfaces/app.interface";
import { EAct } from "./act.entity";
export declare class ETypeFees implements ITypeFees {
    id_type?: number;
    id_act?: number;
    description: string;
    act: EAct;
}
export declare class EListFees implements IListFees {
    id_list?: number;
    id_type: number;
    description: string;
    price: string;
}
export declare class ParamTypeInAct {
    id_act: any;
}
export declare class ParamListInType {
    id_type: any;
}
export declare class ParamDeleteList {
    id_list?: number;
}
export declare class ParamList {
    id_list?: number;
    id_type: number;
    description: string;
    price: string;
}
export declare class ParamType {
    id_type?: any;
    description?: string;
    id_act: number;
}
export declare class ParamDeleteType {
    id_type?: any;
    description: string;
    id_act?: number;
}
