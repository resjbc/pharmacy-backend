import { Controller, Get, Post, Body, Param, Delete, UseGuards } from '@nestjs/common';
import { ValidationPipe } from '../pipes/validation.pipe';
import { ParamPerson, ParamAddPerson, ParamDeletePerson, ParamLogin } from '../models/entitys/person.entity';
import { PersonService } from '../services/person.service';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuard } from '../guards/role.gurad';
import { RoleAccount } from '../interfaces/app.interface';




@Controller('person')
@UseGuards(AuthGuard('jwt'))
export class PersonController {
  constructor(private readonly personService: PersonService) {
    this.personService.addPerson({
      id_person: 1,
      cid: "9999999999999",
      firstname: "ADMIN",
      lastname: "SSJ",
      address:"",
      mobile: "",
      username: "admin",
      password: "adminssj",
      role: 4
    });
  }

  @Get('employee')
  @UseGuards(new RoleGuard(RoleAccount.Admin,RoleAccount.Pharmacy))
  getPersons() {
    return this.personService.getPersons();
  }

  @Get()
  @UseGuards(new RoleGuard(RoleAccount.Admin))
  getPersons_Admin() {
    return this.personService.getPersons_Admin();
  }

  @Get(':pid')
  @UseGuards(new RoleGuard(RoleAccount.Admin,RoleAccount.Pharmacy,RoleAccount.Cash))
  findPerson(@Param(new ValidationPipe()) param: ParamPerson) {
    return this.personService.getPerson(param.pid);
  }

  @Post('add')
  @UseGuards(new RoleGuard(RoleAccount.Admin,RoleAccount.Pharmacy,RoleAccount.Cash))
  addPerson(@Body(new ValidationPipe()) body: ParamAddPerson) {
    return this.personService.addPerson(body);
  }


  @Delete(':id_person')
  @UseGuards(new RoleGuard(RoleAccount.Admin,RoleAccount.Pharmacy,RoleAccount.Cash))
  deleteReceiptDetail(@Param(new ValidationPipe()) param: ParamDeletePerson) {
    return this.personService.deletePerson(param);
  }
}