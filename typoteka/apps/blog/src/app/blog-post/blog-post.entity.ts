import { Category, Post, Comment } from '@typoteka/shared-types';
import { Entity } from '@typoteka/core';

export class BlogPostEntity implements Entity<BlogPostEntity>, Post {
  public id: number;
  public title: string;
  public announceText: string;
  public text: string;
  public publishAt: Date;
  public userId: string;
  public comments: Comment[];
  public categories: Category[];
  public createdAt: Date;

  constructor(post: Post) {
    this.fillEntity(post);
  }

  public fillEntity(entity: Post): void {
    this.title = entity.title;
    this.announceText = entity.announceText;
    this.text = entity.text;
    this.publishAt = new Date();
    this.userId = entity.userId;
    this.comments = [];
    this.categories = [...entity.categories];
    this.createdAt = new Date();
  }

  public toObject(): BlogPostEntity {
    return {
      ...this,
      categories: this.categories.map(({id}) => ({ id })),
      comments: this.comments.map(({id}) => ({id}))
    };
  }

}
