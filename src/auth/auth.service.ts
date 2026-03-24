import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(body) {

    const { username, password } = body;

    // ✅ TEMP LOGIN CHECK
    if (username === 'vijay' && password === 'vijay123') {

      const payload = { username };

      const token = this.jwtService.sign(payload);

      return {
        access_token: token,
      };
    }

    console.log('❌ Login Failed');
    throw new UnauthorizedException('Invalid credentials');
  }
}