import { Module } from '@nestjs/common';
import { BlogUserMemoryRepository } from './blog-user-memory.repository';

@Module({
  providers: [BlogUserMemoryRepository],
  exports: [BlogUserMemoryRepository]
})
export class BlogUserModule {}
