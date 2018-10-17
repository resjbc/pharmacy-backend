import { ParamLogin, ParamChangePassword } from "models/entitys/person.entity";
import { AccountService } from "services/account.service";
import { IPerson } from "interfaces/app.interface";
import { Request } from "express";
export declare class AccountController {
    private readonly account;
    constructor(account: AccountService);
    Login(body: ParamLogin): Promise<{
        accessToken: string;
    }>;
    getUserLogin(req: Request): IPerson;
    changePassword(req: Request, body: ParamChangePassword): Promise<import("typeorm/query-builder/result/UpdateResult").UpdateResult>;
}
