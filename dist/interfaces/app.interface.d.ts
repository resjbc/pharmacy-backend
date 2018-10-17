export interface IReceipt {
    id_receipt?: any;
    id_person?: any;
    id_member_create?: any;
    place: string;
    place_address: string;
    date_created: Date;
    date_updated: Date;
}
export interface IReceiptDetail {
    id_list: any;
    description: string;
    id_receipt?: any;
    id_receipt_detail?: any;
    type: string;
    qty: number;
    price: number;
}
export interface IAct {
    id_act?: any;
    description: string;
}
export interface ITypeFees {
    id_type?: any;
    id_act?: any;
    description: string;
}
export interface IListFees {
    id_list?: any;
    id_type: any;
    description: string;
    price: string;
}
export interface IPerson {
    id_person?: any;
    cid: string;
    firstname: string;
    lastname: string;
    address: string;
    mobile?: string;
    username: string;
    password: string;
    role: RoleAccount;
}
export interface IAccount {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    id?: any;
    position?: string;
    image?: string;
    role?: RoleAccount;
    created?: Date;
    updated?: Date;
}
export declare enum RoleAccount {
    Member = 1,
    Cash = 2,
    Pharmacy = 3,
    Admin = 4
}
export interface IPlace {
    id_place?: any;
    id_person?: any;
    description: string;
}
export interface IChangePassword {
    old_pass: string;
    new_pass: string;
    cnew_pass: string;
}
export declare enum IRoleAccount {
    ผู้ประกอบการ = 1,
    เจ้าหน้าที่การเงิน = 2,
    เจ้าหน้าที่คปส = 3,
    Admin = 4
}
