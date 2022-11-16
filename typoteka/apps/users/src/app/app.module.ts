import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { BlogUserModule } from './blog-user/blog-user.module';

@Module({
  imports: [AuthModule, BlogUserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
