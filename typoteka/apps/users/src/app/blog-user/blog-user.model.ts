import { Document } from 'mongoose';
import { User, UserRole } from '@typoteka/shared-types';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  collection: 'users',
})
export class BlogUserModel extends Document implements User {
  @Prop()
  public avatar: string;

  @Prop({
    required: true,
  })
  public dateBirth: Date;

  @Prop({
    required: true,
    unique: true,
  })
  public email: string;

  @Prop({
    required: true,
  })
  public firstname: string;

  @Prop({
    required: true,
  })
  public lastname: string;

  @Prop({
    required: true,
  })
  public passwordHash: string;

  @Prop({
    required: true,
    type: String,
    enum: UserRole,
    default: UserRole.User,
  })
  public role: UserRole;
}

export const BlogUserSchema = SchemaFactory.createForClass(BlogUserModel);
