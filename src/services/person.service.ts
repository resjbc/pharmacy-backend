import { Injectable, BadRequestException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EPerson, ParamAddPerson, ParamLogin } from "../models/entitys/person.entity";
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
    person["username"] = "";
    person["password"] = "";
    return person;
  }

  async getPersons() {
    const persons = await this.personRepository.createQueryBuilder('person')
      .select().where("role != 4").orderBy("person.id_person", "DESC").getMany();

    if (!persons) throw new BadRequestException('ไม่มีบุคคลในระบบ');
    return persons;
  }

  async getPersons_Admin() {
    const persons = await this.personRepository.createQueryBuilder('person')
      .select().orderBy("person.id_person", "DESC").getMany();

    if (!persons) throw new BadRequestException('ไม่มีบุคคลในระบบ');
    return persons;
  }

  async addPerson(person) {
    if (person.username) {
      const person_ = await this.personRepository.findOne({ username: person.username });
      if (person_ && person_.cid !== person.cid) throw new BadRequestException("username นี้มีผู้ใช้แล้ว")
    }

    const person_ = await this.personRepository.findOne({ cid: person.cid });
    if (person_ && person_.id_person !== person.id_person) 
        throw new BadRequestException("มีหมายเลขบัตรประชาชนนี้ในระบบแล้ว")

    const member = await this.personRepository.save(person);

    return member;
  }

  async deletePerson(person) {
    return await this.personRepository.delete(person)
      .catch(err => { throw new BadRequestException(err) });;
  }



}