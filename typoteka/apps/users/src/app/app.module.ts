import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { BlogUserModule } from './blog-user/blog-user.module';
import { ConfigModule } from '@nestjs/config';
import { ENV_FILE_PATH } from './app.constant';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: ENV_FILE_PATH,
    }),
    AuthModule,
    BlogUserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
