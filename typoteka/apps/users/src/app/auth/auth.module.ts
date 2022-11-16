import { Module } from '@nestjs/common';
import { BlogUserModule } from '../blog-user/blog-user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [BlogUserModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
