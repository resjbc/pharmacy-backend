import { Injectable, BadRequestException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EPerson, ParamAddPerson } from "../models/entitys/person.entity";
import { Repository } from "typeorm";

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(EPerson)
    private readonly personRepository: Repository<EPerson>,
  ) { }

  async getPerson(pid: number) {
    const person = await this.personRepository
      .createQueryBuilder('person')
      .select()
      .where("person.cid = :pid", { pid: pid })
      .getOne();

    if (!person) throw new BadRequestException('ไม่มีบุคคลนี้ในระบบ');
    return person;
  }

  async getPersons() {
    const persons = await this.personRepository.find();
     
    if (persons.length == 0) throw new BadRequestException('ไม่มีบุคคลในระบบ');
    return persons;
  }

  async addPerson(person) {
    const member = await this.personRepository.save(person).catch(err => { throw new BadRequestException("มีหมายเลขบัตรประชาชนนี้ในระบบแล้ว") });
    return member;
  }

  async deletePerson(person){
    return await this.personRepository.delete(person)
          .catch(err => { throw new BadRequestException(err) });;
  }

}