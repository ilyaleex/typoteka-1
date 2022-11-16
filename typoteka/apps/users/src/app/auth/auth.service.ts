import { Injectable } from '@nestjs/common';
import * as dayjs from 'dayjs';
import { UserRole } from '@typoteka/shared-types';
import { BlogUserMemoryRepository } from '../blog-user/blog-user-memory.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { AUTH_USER_EXISTS } from './auth.constant';
import { BlogUserEntity } from '../blog-user/blog-user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly blogUserRepository: BlogUserMemoryRepository
  ) {}

  async register(dto: CreateUserDto) {
    const {email, firstname, lastname, password, dateBirth} = dto;
    const blogUser = {
      email, firstname, lastname, role: UserRole.User,
      avatar: '', dateBirth: dayjs(dateBirth).toDate(),
      passwordHash: ''
    };

    const existUser = await this.blogUserRepository
      .findByEmail(email);

    if (existUser) {
      throw new Error(AUTH_USER_EXISTS);
    }

    const userEntity = await new BlogUserEntity(blogUser)
      .setPassword(password)

    return this.blogUserRepository
      .create(userEntity);
  }

}
