import { Client } from '@app/entities/client';
import { ClientsRepository } from '@app/repositories/clients-repository';

export class InMemoryClientsRepository implements ClientsRepository {
  public clients: Client[] = [];

  async create(client: Client): Promise<void> {
    this.clients.push(client);
  }

  async delete(id: string): Promise<void> {
    const index = this.clients.findIndex((v) => v.id === id);
    this.clients.splice(index, 1);
  }

  async findById(id: string): Promise<Client> {
    return this.clients.filter((v) => v.id === id)[0];
  }
}
