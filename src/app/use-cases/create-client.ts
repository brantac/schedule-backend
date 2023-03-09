import { Injectable } from '@nestjs/common';
import { Client } from '../entities/client';
import { ClientsRepository } from '../repositories/clients-repository';

interface CreateClientRequest {
  name: string;
  email: string;
  password: string;
}

interface CreateClientResponse {
  client: Client;
}

@Injectable()
export class CreateClient {
  constructor(private clientsRepository: ClientsRepository) {}

  async execute(request: CreateClientRequest): Promise<CreateClientResponse> {
    const { name, email } = request;

    const client = new Client({
      name,
      email,
    });

    this.clientsRepository.create(client);

    return { client };
  }
}
