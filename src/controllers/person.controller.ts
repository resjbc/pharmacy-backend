import { Controller, Get, Post, Body, BadRequestException, Param } from '@nestjs/common';
import { ValidationPipe } from '../pipes/validation.pipe';
import { ParamPerson, ParamAddPerson } from '../models/entitys/person.entity';
import { PersonService } from '../services/person.service';




@Controller('person')
export class PersonController {
    constructor(private readonly personService: PersonService) { }

    @Get(':pid')
    findPerson(@Param(new ValidationPipe()) param: ParamPerson) {
       return this.personService.getPerson(param.pid);
    }

    @Get()
    getPersons() {
       return this.personService.getPersons();
    }

    @Post('add')
    addPerson(@Body(new ValidationPipe()) body: ParamAddPerson) {
      return this.personService.addPerson(body);
    }
}