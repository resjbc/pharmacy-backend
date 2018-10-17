import { IPlace } from "interfaces/app.interface";
import { EPerson } from "./person.entity";
export declare class EPlace implements IPlace {
    id_place?: number;
    id_person: number;
    description: string;
    person: EPerson;
}
