import { ClientsRepository } from '@app/repositories/clients-repository';
import { Injectable } from '@nestjs/common';
import { ClientNotFound } from '@app/use-cases/errors/client-not-found';

interface DeleteClientRequest {
  clientId: string;
}

type DeleteClientResponse = void;

@Injectable()
export class DeleteClient {
  constructor(private clientsRepository: ClientsRepository) {}

  async execute(request: DeleteClientRequest): Promise<DeleteClientResponse> {
    const { clientId } = request;

    const client = await this.clientsRepository.findById(clientId);

    if (!client) {
      throw new ClientNotFound();
    }

    client.delete();

    await this.clientsRepository.delete(clientId);
  }
}
