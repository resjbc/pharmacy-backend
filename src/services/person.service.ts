import { Injectable, BadRequestException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EPerson } from "../models/entitys/person.entity";
import { Repository } from "typeorm";

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(EPerson)
    private readonly personRepository: Repository<EPerson>,
  ) {}

  async getPerson(pid: number) {
    const person = await this.personRepository
      .createQueryBuilder('person')
      .select()
      .where("person.cid = :pid", { pid: pid })
      .getOne();

    if (!person) throw new BadRequestException('ไม่มีบุคคลนี้ในระบบ');
    return person;
  }
  
}