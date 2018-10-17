import { Repository } from 'typeorm';
import { EReceipt, EReceiptDetail, ParamDeleteReceiptDetail, QueryReceipt, ParamReceiptPerson, ParamUpdateCashReceipt, QueryReceiptCash } from '../models/entitys/receipt.entity';
export declare class ReceiptService {
    private readonly receiptRepository;
    private readonly receipt_detailRepository;
    constructor(receiptRepository: Repository<EReceipt>, receipt_detailRepository: Repository<EReceiptDetail>);
    findReceiptDate(query: QueryReceipt): Promise<EReceipt[]>;
    findReceiptPerson(param: ParamReceiptPerson): Promise<EReceipt[]>;
    findReceipt(id_reference: any): Promise<EReceipt>;
    insertReceipt(receipts: any): Promise<any>;
    deleteReceiptDetail(receipt_detail: ParamDeleteReceiptDetail): Promise<import("typeorm/query-builder/result/DeleteResult").DeleteResult>;
    updateReceipt(receipt: ParamUpdateCashReceipt): Promise<ParamUpdateCashReceipt>;
    findReceiptCash(query: QueryReceiptCash): Promise<EReceipt[]>;
}
