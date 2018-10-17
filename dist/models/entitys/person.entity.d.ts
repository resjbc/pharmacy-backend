import { IPerson, RoleAccount } from '../../interfaces/app.interface';
import { EReceipt } from './receipt.entity';
import { EPlace } from './place.entity';
export declare class EPerson implements IPerson {
    constructor();
    id_person?: any;
    cid: string;
    firstname: string;
    lastname: string;
    address: string;
    mobile?: string;
    username: string;
    password: string;
    role: RoleAccount;
    receipts: EReceipt[];
    places: EPlace[];
}
export declare class ParamPerson {
    pid: any;
}
export declare class ParamAddPerson {
    id_person?: any;
    cid: any;
    firstname: string;
    lastname: string;
    address?: string;
    mobile?: string;
    username?: string;
    password?: string;
    role: RoleAccount;
}
export declare class ParamDeletePerson {
    id_person?: any;
}
export declare class ParamLogin {
    username?: string;
    password?: string;
}
export declare class ParamChangePassword {
    old_pass: string;
    new_pass: string;
    cnew_pass: string;
}
