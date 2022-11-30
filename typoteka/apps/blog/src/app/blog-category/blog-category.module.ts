import { Module } from '@nestjs/common';
import { BlogCategoryService } from './blog-category.service';
import { BlogCategoryRepository } from './blog-category.repository';
import { BlogCategoryController } from './blog-category.controller';

@Module({
  imports: [],
  controllers: [BlogCategoryController],
  providers: [BlogCategoryService, BlogCategoryRepository],
  exports: [BlogCategoryRepository]
})
export class BlogCategoryModule {}
