import { Module } from '@nestjs/common';
import { BlogPostRepository } from './blog-post.repository';
import { BlogPostService } from './blog-post.service';
import { BlogPostController } from './blog-post.controller';
import { BlogCategoryModule } from '../blog-category/blog-category.module';

@Module({
  imports: [BlogCategoryModule],
  controllers: [BlogPostController],
  providers: [BlogPostService, BlogPostRepository],
})
export class BlogPostModule {}
