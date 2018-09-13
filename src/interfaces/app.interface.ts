//ใบเสร็จ
export interface IReceipt {
    id_receipt?:any;
    id_person?: any;
    id_member_create?: any;
    date_created: Date;
    date_updated: Date;
}

//รายการในใบเสร็จ
export interface IReceiptDetail {
    id_list: any;
    list: string;
    id_receipt?:any
    id_receipt_detail?: any;
    qty: number;
    price: number;
}

//พรบ
export interface IAct {
    id_act?:any ;
    description: string;
}

//ประเภทของค่าธรรมเนียม
export interface ITypeFees {
    id_type?: any;
    id_act?:any;
    description: string;
}

//หมวดค่าธรรมเนียม
export interface IGroupFees {
    id_group?: any;
    id_type?: any;
    description: string;
}

//รายการค่าธรรมเนียม
export interface IListFees {
    id_list?: any;
    id_group: any;
    id_type: any;
    description: string;
    price:string;
}

export interface IPerson {
    id_person?: any;
    cid:string;
    firstname:string;
    lastname:string;
    address:string;
    mobile?:string;
    username:string;
    password:string;
    role: RoleAccount
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



// สิทธ์ผู้ใช้งาน
export enum RoleAccount {
    Member = 1,
    Employee,
    Admin
}
