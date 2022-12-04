import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { BlogPostService } from './blog-post.service';
import { fillObject } from '@typoteka/core';
import { PostRdo } from './rdo/post.rdo';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdateCategoryDto } from '../blog-category/dto/update-category.dto';

@Controller('posts')
export class BlogPostController {
  constructor(
    private readonly blogPostService: BlogPostService
  ) {}

  @Get('/:id')
  async show(@Param('id') id: number) {
    const post = await this.blogPostService.getPost(id);
    return fillObject(PostRdo, post);
  }

  @Get('/')
  async index() {
    const posts = await this.blogPostService.getPosts();
    return fillObject(PostRdo, posts);
  }

  @Post('/')
  async create(@Body() dto: CreatePostDto) {
    const newPost = await this.blogPostService.createPost(dto);
    return fillObject(PostRdo, newPost);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id') id: number) {
    this.blogPostService.deletePost(id);
  }

  @Patch('/:id')
  async update(@Param('id') id: number, @Body() dto: UpdateCategoryDto) {
    const updatedPost = await this.blogPostService.updatePost(id, dto);
    return fillObject(PostRdo, updatedPost)
  }
}
