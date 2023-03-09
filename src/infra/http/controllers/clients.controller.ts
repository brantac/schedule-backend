import { CreateClient } from '@app/use-cases/create-client';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateClientBody } from './dtos/create-client-body';

@Controller()
export class ClientsController {
  constructor(private readonly createClient: CreateClient) {}

  @Post()
  async create(@Body() body: CreateClientBody) {
    const { email, name, password } = body;

    const { client } = await this.createClient.execute({
      email,
      name,
      password,
    });

    return {
      name: client.name,
      email: client.email,
      createdAt: client.createdAt,
    };
  }
}
