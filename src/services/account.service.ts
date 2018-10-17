import { Injectable, BadRequestException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { EPerson, ParamLogin } from "../models/entitys/person.entity";
import { generate, verify } from 'password-hash';
import { JwtAuthenService } from "./jwt-authen.service";
import { IChangePassword, IPerson } from "../interfaces/app.interface";

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(EPerson) private readonly personRepository: Repository<EPerson>,
    private authenService: JwtAuthenService
  ) { }

  async onLogin(login: ParamLogin) {
    const person = await this.personRepository
      .createQueryBuilder('person')
      .select()
      .where("person.username = :username", { username: login.username })
      .getOne();

    if (!person) throw new BadRequestException('ไม่มีผู้ใช้งานนี้ในระบบ');
    if (login.password !== person.password) throw new BadRequestException('ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง');
    person.password = "";

    return { accessToken: await this.authenService.generateAccessToken(person) };
  }

  async onChangePassword(id_person: any, body: IChangePassword) {
    const memberItem = await this.personRepository.findOne({ id_person: id_person });

    if (body.old_pass != memberItem.password)
      throw new BadRequestException('รหัสผ่านเดิมไม่ถูกต้อง');

    const updated = await this.personRepository.update({ id_person: id_person }, <IPerson>{
      password: body.new_pass
    });

    return updated;
  }

}