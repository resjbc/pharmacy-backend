import { InjectRepository } from "@nestjs/typeorm";
import { Injectable, BadRequestException } from "@nestjs/common";
import { EAct } from "models/entitys/act.entity";
import { Repository } from "typeorm";
import { ETypeFees, EListFees } from "models/entitys/fees-type.entity";

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

  async Act() {
    const act_item = await this.actRepository
      .createQueryBuilder('act')
      .select()
      .getMany()

    if (!act_item) throw new BadRequestException('ไม่มีรายการพรบในระบบ');
    return act_item;
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

  async ListInType(id_type: number) {
    const list_in_type_item = await this.listFeesRepository
      .createQueryBuilder('list')
      .select(["list.id_list","list.description","list.price"])
      .where("list.id_type = :id_type", { id_type: id_type })
      .getMany()

    if (list_in_type_item.length == 0) throw new BadRequestException('ไม่มีรายการในประเภทค่าธรรมเนียมนี้');
    return list_in_type_item;
  }

}
