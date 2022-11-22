import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {BlogUserModel, BlogUserSchema} from './blog-user.model';
import {BlogUserRepository} from './blog-user.repository';

@Module({
  imports: [MongooseModule.forFeature([
    { name: BlogUserModel.name, schema: BlogUserSchema }
  ])],
  providers: [BlogUserRepository],
  exports: [BlogUserRepository]
})
export class BlogUserModule {}
