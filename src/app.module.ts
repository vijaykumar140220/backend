import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    // ✅ Load environment variables (.env)
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // ✅ MongoDB Connection (use .env instead of hardcoding)
    MongooseModule.forRoot(
      process.env.MONGO_URI || 'mongodb://localhost:27017/testdb',
    ),

    // ✅ Modules
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
