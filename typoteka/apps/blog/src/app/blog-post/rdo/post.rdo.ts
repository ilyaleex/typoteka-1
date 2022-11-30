import { Expose } from 'class-transformer';
import { Category, Comment} from '@typoteka/shared-types';

export class PostRdo {
  @Expose()
  public id: string;

  @Expose()
  public title: string;

  @Expose()
  public announceText: string;

  @Expose()
  public text: string;

  @Expose()
  public publishAt: string;

  @Expose()
  public userId: string;

  @Expose()
  public categories: Category[];

  @Expose()
  public comments: Comment[]
}
