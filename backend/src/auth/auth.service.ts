import { JwtService } from '@nestjs/jwt';
import { UserService } from './../user/user.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService, private jwtService: JwtService){}

    async signIn(userId: number): Promise<{ access_token: string }>{
        const userFounded = this.userService.findOne(userId);

        if(!userFounded){
            throw new UnauthorizedException();
        }

        const payload = {}

        return {
            access_token: 
        }
    }
}
