import { InMemoryClientsRepository } from '@test/repositories/in-memory-clients-repository';
import { CreateClient } from './create-client';

describe('Create client use case', () => {
  it('should create a new client', async () => {
    const clientsRepository = new InMemoryClientsRepository();
    const createClient = new CreateClient(clientsRepository);

    expect(clientsRepository.clients).toHaveLength(0);

    const { client } = await createClient.execute({
      email: 'email@email.com',
      name: 'John',
      password: 'afsafasf',
    });

    expect(clientsRepository.clients).toHaveLength(1);
    expect(clientsRepository.clients[0]).toEqual(client);
  });
});
