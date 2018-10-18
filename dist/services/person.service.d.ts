import { EPerson } from "../models/entitys/person.entity";
import { Repository } from "typeorm";
export declare class PersonService {
    private readonly personRepository;
    constructor(personRepository: Repository<EPerson>);
    getPerson(pid: number): Promise<EPerson>;
    getPersons(): Promise<EPerson[]>;
    getPersons_Admin(): Promise<EPerson[]>;
    addPerson(person: any): Promise<any>;
    deletePerson(person: any): Promise<import("typeorm/query-builder/result/DeleteResult").DeleteResult>;
    firstStart(person: any): Promise<void>;
}
