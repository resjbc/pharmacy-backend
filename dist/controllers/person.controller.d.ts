import { ParamPerson, ParamAddPerson, ParamDeletePerson } from '../models/entitys/person.entity';
import { PersonService } from '../services/person.service';
export declare class PersonController {
    private readonly personService;
    constructor(personService: PersonService);
    getPersons(): Promise<import("models/entitys/person.entity").EPerson[]>;
    getPersons_Admin(): Promise<import("models/entitys/person.entity").EPerson[]>;
    findPerson(param: ParamPerson): Promise<import("models/entitys/person.entity").EPerson>;
    addPerson(body: ParamAddPerson): Promise<any>;
    deleteReceiptDetail(param: ParamDeletePerson): Promise<import("typeorm/query-builder/result/DeleteResult").DeleteResult>;
}
