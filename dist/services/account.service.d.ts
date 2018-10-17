import { Repository } from "typeorm";
import { EPerson, ParamLogin } from "models/entitys/person.entity";
import { JwtAuthenService } from "./jwt-authen.service";
import { IChangePassword } from "interfaces/app.interface";
export declare class AccountService {
    private readonly personRepository;
    private authenService;
    constructor(personRepository: Repository<EPerson>, authenService: JwtAuthenService);
    onLogin(login: ParamLogin): Promise<{
        accessToken: string;
    }>;
    onChangePassword(id_person: any, body: IChangePassword): Promise<import("typeorm/query-builder/result/UpdateResult").UpdateResult>;
}
