import { Injectable } from '@nestjs/common';
import * as dayjs from 'dayjs';
import { UserRole } from '@typoteka/shared-types';
import { BlogUserMemoryRepository } from '../blog-user/blog-user-memory.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { AUTH_USER_EXISTS, AUTH_USER_NOT_FOUND, AUTH_USER_PASSWORD_WRONG } from './auth.constant';
import { BlogUserEntity } from '../blog-user/blog-user.entity';
import { LoginUserDto } from './dto/login-user.dto';

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

  async verifyUser(dto: LoginUserDto) {
    const {email, password} = dto;
    const existUser = await this.blogUserRepository.findByEmail(email);

    if (!existUser) {
      throw new Error(AUTH_USER_NOT_FOUND);
    }

    const blogUserEntity = new BlogUserEntity(existUser);
    if (! await blogUserEntity.comparePassword(password)) {
      throw new Error(AUTH_USER_PASSWORD_WRONG);
    }

    return blogUserEntity.toObject();
  }

  async getUser(id: string) {
    return this.blogUserRepository.findById(id);
  }

}
