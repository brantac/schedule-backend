import { Client } from '@app/entities/client';

export class ClientViewModel {
  static toHttp(client: Client) {
    return {
      id: client.id,
      name: client.name,
      email: client.email,
    };
  }
}
