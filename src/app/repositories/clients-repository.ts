import { Client } from '../entities/client';

export abstract class ClientsRepository {
  abstract create(client: Client): Promise<void>;
  abstract delete(id: string): Promise<void>;
  abstract findById(id: string): Promise<Client>;
}
