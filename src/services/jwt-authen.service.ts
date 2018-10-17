import { Injectable, UnauthorizedException } from "@nestjs/common";

import { sign } from 'jsonwebtoken';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from "@nestjs/typeorm";
import { EPerson } from "../models/entitys/person.entity";
import { Repository } from "typeorm";
import { ExtractJwt, Strategy } from 'passport-jwt';
import { IAuthen } from "../interfaces/authen.interface";
import { IPerson } from "../interfaces/app.interface";

@Injectable()
export class JwtAuthenService implements IAuthen {

    constructor(
        @InjectRepository(EPerson)
        private readonly personRepository: Repository<EPerson>
    ) { }

    secretKey: string = "Hitman"

    async generateAccessToken(member: IPerson) {
        const payload = { cid: member.cid }
        return sign(payload, this.secretKey, { expiresIn: 60 * 60 });
    }

    //ยืนยันผู้ใช้เข้าสู่ระบบ
    async validateUser({cid}): Promise<IPerson> {
        //console.log(cid);
        try {
            const member = await this.personRepository
                .createQueryBuilder('person')
                .select()
                .where("person.cid = :cid", { cid: cid })
                .getOne();
            //console.log(member);
            return member;
        } catch (ex) { }
        return null
    }

}


@Injectable()
export class JwtAuthenStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: JwtAuthenService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: authService.secretKey,
        });
    }

    async validate(payload: { cid: string }) {
        const user = await this.authService.validateUser(payload);
        if (!user) {
            throw new UnauthorizedException('กรุณาล็อกอินใหม่');
        }
        return user;
    }
}