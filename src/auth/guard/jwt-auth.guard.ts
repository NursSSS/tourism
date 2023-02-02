import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";

@Injectable()
export class JwtAuthGuard implements CanActivate {
    constructor(
        private readonly JwtService: JwtService
    ){}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const req = context.switchToHttp().getRequest()

        try {
            const authHead = req.headers.authorization; 
            const bearer = authHead.split(' ')[0]
            const token = authHead.split(' ')[1]

            if(bearer !== 'Bearer' || !token){
                throw new UnauthorizedException('User is not registered')
            }

            const user = this.JwtService.verify(token)
            req.user = user

            return true
        } catch (e){
            throw new UnauthorizedException('User is not registered')
        }
    }
}