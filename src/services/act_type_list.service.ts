import { InjectRepository } from "@nestjs/typeorm";
import { Injectable, BadRequestException } from "@nestjs/common";
import { EAct } from "../models/entitys/act.entity";
import { Repository } from "typeorm";
import { ETypeFees, EListFees } from "../models/entitys/fees-type.entity";

@Injectable()
export class ActTypeListService {
  constructor(
    @InjectRepository(EAct)
    private readonly actRepository: Repository<EAct>,
    @InjectRepository(ETypeFees)
    private readonly typeFeesRepository: Repository<ETypeFees>,
    @InjectRepository(EListFees)
    private readonly listFeesRepository: Repository<EListFees>,
  ) {}

  async getActs() {
    const act_item = await this.actRepository
      .createQueryBuilder('act')
      .select().orderBy("id_act","DESC")
      .getMany()

    if (!act_item) throw new BadRequestException('ไม่มีรายการพรบในระบบ');
    return act_item;
  }

  async addAct(act) {
    const act_ = await this.actRepository.save(act).catch(err => { throw new BadRequestException("มี พรบ ในระบบแล้ว") }); //
    return act_;
  }

  async deleteAct(act) {
    return await this.actRepository.delete(act)
    .catch(err => { throw new BadRequestException(err) });;  //วัตถุออกฤทธิ์ต่อจิตและประสาท
  }

  async TypeInAct(id_act: number) {
    const type_in_act_item = await this.typeFeesRepository
      .createQueryBuilder('typefees')
      .select(["typefees.id_type","typefees.description"])
      .where("typefees.id_act = :id_act", { id_act: id_act })
      .getMany()

    if (type_in_act_item.length == 0) throw new BadRequestException('ไม่มีประเภทค่าธรรมเนียมใน พรบ นี้');
    return type_in_act_item;
  }

  async deleteType(type) {
    return await this.typeFeesRepository.delete(type)
    .catch(err => { throw new BadRequestException(err) });;  //วัตถุออกฤทธิ์ต่อจิตและประสาท
  }

  async addType(type) {
    const type_ = await this.typeFeesRepository.save(type).catch(err => { throw new BadRequestException("มี พรบ นี้ในระบบแล้ว") }); //
    return type_;
  }

  async ListInType(id_type: number) {
    const list_in_type_item = await this.listFeesRepository
      .createQueryBuilder('list')
      .select(["list.id_list","list.description","list.price"])
      .where("list.id_type = :id_type", { id_type: id_type })
      .getMany()

    if (list_in_type_item.length == 0) throw new BadRequestException('ไม่มีรายการในประเภทค่าธรรมเนียมนี้');
    return list_in_type_item;
  }

  async deleteList(list) {
    return await this.listFeesRepository.delete(list)
    .catch(err => { throw new BadRequestException(err) });  //วัตถุออกฤทธิ์ต่อจิตและประสาท
  }

  async addList(list) {
    const list_ = await this.listFeesRepository.save(list).catch(err => { throw new BadRequestException("มีรายการนี้ในระบบแล้ว") }); // 
    return list_;
  }

}
