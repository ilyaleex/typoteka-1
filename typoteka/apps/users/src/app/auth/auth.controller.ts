import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { fillObject } from '@typoteka/core';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { LoggedUserRdo } from './rdo/logged-user.rdo';
import { UserRdo } from './rdo/user.rdo';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}

  @Post('register')
  async create(@Body() dto: CreateUserDto) {
    const newUser = await this.authService.register(dto);
    return fillObject(UserRdo, newUser);
  }

  @Post('login')
  @ApiResponse({
    type: LoggedUserRdo,
  })
  async login(@Body() dto: LoginUserDto) {
    const verifiedUser = await this.authService.verifyUser(dto);
    return fillObject(LoggedUserRdo, verifiedUser);
  }

  @Get(':id')
  @ApiResponse({
    type: UserRdo,
  })
  async show(@Param('id') id: string) {
    const existUser = await this.authService.getUser(id);
    return fillObject(UserRdo, existUser);
  }

}
