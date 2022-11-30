import { Module } from '@nestjs/common';
import { BlogCategoryModule } from './blog-category/blog-category.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, BlogCategoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
