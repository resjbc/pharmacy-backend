import { ReceiptService } from '../services/receipt.service';
import { ParamReceipt, ParamInsertReceipt, ParamDeleteReceiptDetail, QueryReceipt, ParamReceiptPerson, ParamUpdateCashReceipt, QueryReceiptCash } from '../models/entitys/receipt.entity';
export declare class ReceiptController {
    private readonly receiptService;
    constructor(receiptService: ReceiptService);
    findReceiptDate(query: QueryReceipt): Promise<import("models/entitys/receipt.entity").EReceipt[]>;
    findReceiptCash(query: QueryReceiptCash): Promise<import("models/entitys/receipt.entity").EReceipt[]>;
    findReceipt(param: ParamReceipt): Promise<import("models/entitys/receipt.entity").EReceipt>;
    findReceipPerson(param: ParamReceiptPerson): Promise<import("models/entitys/receipt.entity").EReceipt[]>;
    insertReceipt(body: ParamInsertReceipt): Promise<any>;
    updateReceiptCash(body: ParamUpdateCashReceipt): Promise<ParamUpdateCashReceipt>;
    deleteReceiptDetail(param: ParamDeleteReceiptDetail): Promise<import("typeorm/query-builder/result/DeleteResult").DeleteResult>;
}
