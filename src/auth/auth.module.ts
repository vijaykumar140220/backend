import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    JwtModule.register({
      secret: 'mysecret123', // ✅ simple for now
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController], // ✅ MUST
  providers: [AuthService],
})
export class AuthModule {}