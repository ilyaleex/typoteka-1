import { CRUDRepository } from '@typoteka/core';
import { BlogPostEntity } from './blog-post.entity';
import { Post } from '@typoteka/shared-types';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BlogPostRepository implements CRUDRepository<BlogPostEntity, number, Post> {
  constructor(private readonly prisma: PrismaService) {}

  public async create(item: BlogPostEntity): Promise<Post> {
    const entityData = item.toObject();
    return this.prisma.post.create({
      data: {
        ...entityData,
        categories: {
          connect: [...entityData.categories]
        },
        comments: {
          connect: []
        }
      },
      include: {
        comments: true,
        categories: true,
      }
    });
  }

  public async destroy(id: number): Promise<void> {
    await this.prisma.post.delete({
      where: {
        id,
      }
    });
  }

  public async findById(id: number): Promise<Post | null> {
    return this.prisma.post.findFirst({
      where: {
        id
      },
      include: {
        comments: true,
        categories: true,
      }
    });
  }

  public find(): Promise<Post[]> {
    return this.prisma.post.findMany({
      include: {
        comments: true,
        categories: true
      }
    });
  }

  public update(id: number, item: BlogPostEntity): Promise<Post> {
    return Promise.resolve(undefined);
  }



}
