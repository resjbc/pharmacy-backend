import { IPerson } from "./app.interface";

export interface IAuthen {
    generateAccessToken(member: IPerson): Promise<string>;
    validateUser(accessToken): Promise<IPerson>;
}