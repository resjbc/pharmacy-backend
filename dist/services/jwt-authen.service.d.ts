import { EPerson } from "models/entitys/person.entity";
import { Repository } from "typeorm";
import { Strategy } from 'passport-jwt';
import { IAuthen } from "interfaces/authen.interface";
import { IPerson } from "interfaces/app.interface";
export declare class JwtAuthenService implements IAuthen {
    private readonly personRepository;
    constructor(personRepository: Repository<EPerson>);
    secretKey: string;
    generateAccessToken(member: IPerson): Promise<string>;
    validateUser({ cid }: {
        cid: any;
    }): Promise<IPerson>;
}
declare const JwtAuthenStrategy_base: new (...args: any[]) => typeof Strategy;
export declare class JwtAuthenStrategy extends JwtAuthenStrategy_base {
    private readonly authService;
    constructor(authService: JwtAuthenService);
    validate(payload: {
        cid: string;
    }): Promise<IPerson>;
}
export {};
