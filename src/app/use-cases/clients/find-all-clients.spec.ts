import { Client } from '@app/entities/client';
import { InMemoryClientsRepository } from '@test/repositories/in-memory-clients-repository';
import { FindAllClients } from './find-all-clients';

describe('Find all clients use case', () => {
  it('should return all clients stored on the clients repository', async () => {
    const clientsRepository = new InMemoryClientsRepository();
    const findAllClients = new FindAllClients(clientsRepository);

    expect(clientsRepository.clients).toHaveLength(0);

    await clientsRepository.create(
      new Client({
        email: 'email@email.com',
        name: 'John',
      }),
    );
    await clientsRepository.create(
      new Client({
        email: 'email@email.com',
        name: 'Maria',
      }),
    );
    await clientsRepository.create(
      new Client({
        email: 'email@email.com',
        name: 'Roberto',
      }),
    );
    await clientsRepository.create(
      new Client({
        email: 'email@email.com',
        name: 'Grace',
      }),
    );

    const { clients } = await findAllClients.execute();

    expect(clientsRepository.clients).toHaveLength(4);
    expect(clients).toHaveLength(4);
  });
});
