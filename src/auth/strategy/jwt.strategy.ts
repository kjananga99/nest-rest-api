import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";


@Injectable()
export class JwtStrategy extends PassportStrategy(
    Strategy,
){
    constructor(config: ConfigService) {
        super({
            jwtFromRequest:
                ExtractJwt.fromAuthHeaderAsBearerToken(),
            // secretOrKey: config.get('JWT_SECRET'),
            secretOrKey: config.get<string>('JWT_SECRET') || 'default-secret',
        });
    }

    async validate(payload: any) {
        return payload; // Return the decoded JWT payload
    }
}