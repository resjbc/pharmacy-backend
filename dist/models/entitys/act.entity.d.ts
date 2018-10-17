import { IAct } from "../../interfaces/app.interface";
import { ETypeFees } from "./fees-type.entity";
export declare class EAct implements IAct {
    id_act?: number;
    description: string;
    typefees_s: ETypeFees[];
}
export declare class ParamDeleteAct {
    id_act: any;
    description?: string;
}
export declare class ParamAct {
    id_act: any;
    description?: string;
}
