import { Category } from './category.interface';
import { Comment } from './comment.interface';

export interface Post {
  id?: number;
  title: string;
  categories: Category[];
  announceText: string;
  text: string;
  publishAt?: Date;
  userId: string;
  comments: Comment[];
  createdAt?: Date;
}
