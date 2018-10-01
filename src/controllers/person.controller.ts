import { Controller, Get, Post, Body, BadRequestException, Param } from '@nestjs/common';
import { ValidationPipe } from '../pipes/validation.pipe';
import { EPerson, ParamPerson } from '../models/entitys/person.entity';
import { PersonService } from '../services/person.service';




@Controller('person')
export class PersonController {
    constructor(private readonly personService: PersonService) { }

    @Get(':pid')
    findPerson(@Param(new ValidationPipe()) param: ParamPerson) {
       return this.personService.getPerson(param.pid);
    }

    @Post('add')
    addPerson(@Body(new ValidationPipe()) body: EPerson) {
      
    }
}