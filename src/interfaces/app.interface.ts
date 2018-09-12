//ใบเสร็จ
export class IReceipt {
    id_receipt?:number;
    id_customer: number;
    //id_act: number;
    id_member_create: number;
    date_created: Date;
    date_updated: Date;
}

//รายการในใบเสร็จ
export class IReceiptDetail {
    id_list: number;
    list: string;
    id_receipt_detail?: number;
    qty: number;
    price: number;
}

//พรบ
export class IAct {
    id_act?:number ;
    description: string;
}

//ประเภทของค่าธรรมเนียม
export class ITypeFees {
    id_type?: number;
    description: string;
}

//หมวดค่าธรรมเนียม
export class IGroupFees {
    id_group?: number;
    id_type?: number;
    description: string;
}

//รายการค่าธรรมเนียม
export class IListFees {
    id_list?: number;
    id_group: number;
    id_type: number;
    description: string;
    price:string;
}

