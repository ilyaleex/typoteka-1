import { Category } from '@typoteka/shared-types';
import { Entity } from '@typoteka/core';

export class BlogCategoryEntity implements Entity<BlogCategoryEntity>, Category {
  public id: number;
  public title: string;

  constructor(category: Category) {
    this.fillEntity(category);
  }

  public fillEntity(entity: Category) {
    this.title = entity.title;
    this.id = entity.id;
  }

  public toObject(): BlogCategoryEntity {
    return { ...this }
  }
}
