import { Category } from '@typoteka/shared-types';
import { Injectable } from '@nestjs/common';
import { BlogCategoryRepository } from './blog-category.repository';
import { CreateCategoryDto } from './dto/create-category.dto';
import { BlogCategoryEntity } from './blog-category.entity';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class BlogCategoryService {
  constructor(
    private readonly blogCategoryRepository: BlogCategoryRepository
  ) {}

  async createCategory(dto: CreateCategoryDto): Promise<Category> {
    const categoryEntity = new BlogCategoryEntity(dto);
    return this.blogCategoryRepository.create(categoryEntity);
  }

  async deleteCategory(id: number): Promise<void> {
    this.blogCategoryRepository.destroy(id);
  }

  async getCategory(id: number): Promise<Category> {
    return this.blogCategoryRepository.findById(id);
  }

  async getCategories(): Promise<Category[]> {
    return this.blogCategoryRepository.find();
  }

  async updateCategory(id: number, dto: UpdateCategoryDto): Promise<Category> {
    return this.blogCategoryRepository.update(id, new BlogCategoryEntity(dto));
  }
}
