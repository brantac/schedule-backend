import { Client } from './client';

describe('Client', () => {
  it('should create a new client', () => {
    const dateNow = new Date();

    const client = new Client({
      email: 'asfasf',
      name: 'Maria',
      createdAt: dateNow,
    });

    expect(client.createdAt).toEqual(dateNow);
  });
});
