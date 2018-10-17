import { CanActivate, ExecutionContext } from "@nestjs/common";
import { RoleAccount } from "../interfaces/app.interface";
import { Observable } from "rxjs";
export declare class RoleGuard implements CanActivate {
    private roles;
    constructor(...roles: RoleAccount[]);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
