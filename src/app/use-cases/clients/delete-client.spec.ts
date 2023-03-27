import { Client } from '@app/entities/client';
import { InMemoryClientsRepository } from '@test/repositories/in-memory-clients-repository';
import { DeleteClient } from './delete-client';

describe('Delete client use case', () => {
  it('should delete a client from repository', async () => {
    const clientsRepository = new InMemoryClientsRepository();
    const deleteClient = new DeleteClient(clientsRepository);

    expect(clientsRepository.clients).toHaveLength(0);

    const client = new Client({
      email: 'email@email.com',
      name: 'John',
    });
    await clientsRepository.create(client);

    expect(clientsRepository.clients).toHaveLength(1);

    await deleteClient.execute({ clientId: client.id });

    expect(clientsRepository.clients).toHaveLength(0);
  });
});
