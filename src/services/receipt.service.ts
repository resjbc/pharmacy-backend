import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, createQueryBuilder } from 'typeorm';
import { EReceipt, EReceiptDetail, ParamReceiptDetail, ParamDeleteReceiptDetail, QueryReceipt, ParamReceiptPerson, ParamUpdateCashReceipt, QueryReceiptCash } from '../models/entitys/receipt.entity';
import { EPerson } from '../models/entitys/person.entity';
import { IReceiptDetail } from '../interfaces/app.interface';



@Injectable()
export class ReceiptService {
  constructor(
    @InjectRepository(EReceipt)
    private readonly receiptRepository: Repository<EReceipt>,
    @InjectRepository(EReceiptDetail)
    private readonly receipt_detailRepository: Repository<EReceiptDetail>,
  ) { }

  async findReceiptDate(query: QueryReceipt) {
    const receipts = await this.receiptRepository
      .createQueryBuilder('receipt')
      .select([
        "person.firstname",
        "person.lastname",
        "person.cid",
        "receipt.date_created",
        "receipt.id_reference",
        "receipt.id_receipt_cash",
        "receipt.id_receipt_cash_number"
      ])
      .leftJoin("receipt.person", "person")
      .leftJoin("receipt.member_create", "member_create")
      .leftJoin("receipt.member_cash", "member_cash")
      .andWhere("receipt.date_created::DATE BETWEEN :start::DATE AND :end::DATE")
      .setParameter("start", query.myDateStart)
      .setParameter("end", query.myDateEnd)
      .getMany();

    return receipts;

  }

  async findReceiptPerson(param: ParamReceiptPerson) {
    const receipts = await this.receiptRepository
      .createQueryBuilder('receipt')
      .select([
        "person.firstname",
        "person.lastname",
        "person.cid",
        "receipt.date_created",
        "receipt.id_reference",
        "receipt.id_receipt_cash",
        "receipt.id_receipt_cash_number"
      ])
      .leftJoin("receipt.person", "person")
      .leftJoin("receipt.member_create", "member_create")
      .leftJoin("receipt.member_cash", "member_cash")
      .andWhere("person.cid =  :cid")
      .setParameter("cid", param.cid)
      .getMany();

    return receipts;
  }

  async findReceipt(id_reference: any) {
    //console.log(id_receipt);
    const receipt_item = await this.receiptRepository
      .createQueryBuilder('receipt')
      .select(["person.firstname",
        "person.lastname",
        "person.cid",
        "person.address",
        "person.mobile",
        "receipt.place",
        "receipt.place_address",
        "receipt.date_created",
        "receipt.id_receipt",
        "receipt.id_reference",
        "receipt.id_receipt_cash",
        "receipt.id_receipt_cash_number",
        "receiptDetail.id_receipt_detail",
        "receiptDetail.description",
        "receiptDetail.type",
        "receiptDetail.price",
        "member_create.firstname",
        "member_create.lastname",
        "member_cash.firstname",
        "member_cash.lastname"
      ])
      .leftJoin("receipt.person", "person")
      .leftJoin("receipt.member_create", "member_create")
      .leftJoin("receipt.member_cash", "member_cash")
      .leftJoin("receipt.receiptDetails", "receiptDetail")
      .where("receipt.id_reference = :id", { id: id_reference })
      .getOne()

    //console.log(receipt_item);

    /*const receipt_item = await this.receiptRepository
      .createQueryBuilder('receipt')
      //.select()
      //.innerJoin(EAct,"act","act.id_act = receipt.id_act")
      //.innerJoin(EReceiptDetail,"receipt_details","receipt_details.id_receipt = receipt.id_receipt")
      .leftJoinAndSelect("receipt.receiptDetails", "receiptDetail")
      .where("receipt.id_receipt = :id", { id: id_receipt })
      .orderBy("receipt.date_created", "ASC")
      .getOne()*/

    //console.log(person_item);

    //const receipt_item = await this.receiptRepository.findOne({id_receipt:id_receipt})
    if (!receipt_item) throw new BadRequestException('ไม่มีรายการนี้ในระบบ');

    return receipt_item;
  }



  async insertReceipt(receipts: any) {
    let receipt = receipts;
    let receiptDetailss = receipts["receiptDetails"];
    delete receipt.receiptDetails;
    let year = new Date().getFullYear();

    receipt = await this.receiptRepository.save(receipt).catch(err => { throw new BadRequestException('receiptRepository1') });
    receipt.id_reference = year + "" + receipt.id_receipt;
    receipt = await this.receiptRepository.save(receipt).catch(err => { throw new BadRequestException('receiptRepository2') });

    const receiptDetails = receiptDetailss.map((receiptDetail) => {
      receiptDetail.id_receipt = receipt.id_receipt;
      return receiptDetail;
    })

    const receipt_details = await this.receipt_detailRepository.save(receiptDetails).catch(err => { throw new BadRequestException('receipt_detailRepository') });
    receipt.receiptDetails = receipt_details;

    return receipt;
    //const identifiers = rusults.identifiers[0];
    /*const id_receipt = Object.keys(identifiers).map(key => identifiers[key])[0];*/
  }

  async deleteReceiptDetail(receipt_detail: ParamDeleteReceiptDetail) {
    return await this.receipt_detailRepository.delete(receipt_detail);
  }

  async updateReceipt(receipt: ParamUpdateCashReceipt) {
    return await this.receiptRepository.save(receipt);
  }


  async findReceiptCash(query: QueryReceiptCash) {

    let findReceipt_ = () => this.receiptRepository
      .createQueryBuilder('receipt')
      .select([
        "person.firstname",
        "person.lastname",
        "person.cid",
        "receipt.date_created",
        "receipt.id_reference",
        "receipt.id_receipt_cash",
        "receipt.id_receipt_cash_number"
      ])
      .leftJoin("receipt.person", "person")
      .leftJoin("receipt.member_create", "member_create")
      .leftJoin("receipt.member_cash", "member_cash")

    if (query.id_receipt_cash && query.id_receipt_cash_number) {
      return await findReceipt_()
        .where("receipt.id_receipt_cash = :id_receipt_cash", { id_receipt_cash: query.id_receipt_cash })
        .andWhere("receipt.id_receipt_cash_number = :id_receipt_cash_number", { id_receipt_cash_number: query.id_receipt_cash_number }).getMany();
    }
    else if (query.id_receipt_cash_number) {
      return await findReceipt_()
        .where("receipt.id_receipt_cash_number = :id_receipt_cash_number", { id_receipt_cash_number: query.id_receipt_cash_number }).getMany();
    }
    else if (query.id_receipt_cash) {
      return await findReceipt_()
        .where("receipt.id_receipt_cash = :id_receipt_cash", { id_receipt_cash: query.id_receipt_cash }).getMany();
    }
    else throw new BadRequestException('ใส่เลขที่ใบเสร็จหรือเล่มที่');


  }






}