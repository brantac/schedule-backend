import { ClientsRepository } from '@app/repositories/clients-repository';
import { CreateClient } from '@app/use-cases/create-client';
import { Module } from '@nestjs/common';
import { InMemoryClientsRepository } from '@test/repositories/in-memory-clients-repository';
import { ClientsController } from './controllers/clients.controller';

@Module({
  imports: [],
  controllers: [ClientsController],
  providers: [
    CreateClient,
    {
      provide: ClientsRepository,
      useClass: InMemoryClientsRepository,
    },
  ],
})
export class HttpModule {}
