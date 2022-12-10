import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from './dtos/create-user-dto';
import { UserRepository } from './repositories/user-repository';

@Controller()
export class AppController {
  constructor(private prismaUserRepository: UserRepository) {}

  @Post()
  async getHello(@Body() body: CreateUserDTO) {
    const { name, function: menberFunction } = body;

    await this.prismaUserRepository.create(name, menberFunction);
  }
}
