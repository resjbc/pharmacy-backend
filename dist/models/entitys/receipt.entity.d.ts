import { IReceipt, IReceiptDetail } from '../../interfaces/app.interface';
import { EPerson } from './person.entity';
export declare class EReceipt implements IReceipt {
    id_receipt?: any;
    id_person: number;
    id_member_create: number;
    place: string;
    place_address: string;
    date_created: Date;
    date_updated: Date;
    id_reference?: string;
    id_receipt_cash?: string;
    id_receipt_cash_number?: string;
    id_member_cash?: number;
    receiptDetails: EReceiptDetail[];
    person: EPerson;
    member_create: EPerson;
    member_cash: EPerson;
}
export declare class EReceiptDetail implements IReceiptDetail {
    id_receipt_detail?: any;
    id_receipt: number;
    id_list: number;
    description: string;
    type: string;
    qty: number;
    price: number;
    receipt: EReceipt;
}
export declare class ParamReceipt {
    id_reference: any;
}
export declare class ParamReceiptPerson {
    cid: any;
}
export declare class QueryReceipt {
    myDateStart: any;
    myDateEnd: any;
}
export declare class QueryReceiptCash {
    id_receipt_cash?: any;
    id_receipt_cash_number?: any;
}
export declare class ParamReceiptDetail {
    id_list: number;
    description: string;
    qty?: number;
    price: number;
    type: string;
}
export declare class ParamInsertReceipt {
    id_receipt?: any;
    id_person: any;
    id_member_create: any;
    place: string;
    place_address: string;
    date_created: Date;
    date_updated: Date;
    receiptDetails: ParamReceiptDetail[];
}
export declare class ParamUpdateCashReceipt {
    id_receipt: any;
    id_receipt_cash: any;
    id_receipt_cash_number: any;
    id_member_cash: any;
}
export declare class ParamDeleteReceiptDetail {
    id_receipt_detail: any;
}
