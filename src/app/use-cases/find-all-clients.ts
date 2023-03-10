import { Client } from '@app/entities/client';
import { ClientsRepository } from '@app/repositories/clients-repository';
import { Injectable } from '@nestjs/common';

interface FindAllClientsResponse {
  clients: Client[];
}

@Injectable()
export class FindAllClients {
  constructor(private clientsRepository: ClientsRepository) {}

  async execute(): Promise<FindAllClientsResponse> {
    const clients = await this.clientsRepository.findAll();

    return { clients };
  }
}
