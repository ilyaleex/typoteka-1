import { Module } from '@nestjs/common';
import { BlogPostModule } from './blog-post/blog-post.module';
import { BlogCategoryModule } from './blog-category/blog-category.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, BlogPostModule, BlogCategoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
