import { ClientsRepository } from '@app/repositories/clients-repository';
import { CreateClient } from '@app/use-cases/create-client';
import { DeleteClient } from '@app/use-cases/delete-client';
import { FindAllClients } from '@app/use-cases/find-all-clients';
import { Module } from '@nestjs/common';
import { InMemoryClientsRepository } from '@test/repositories/in-memory-clients-repository';
import { ClientsController } from './controllers/clients.controller';

@Module({
  imports: [],
  controllers: [ClientsController],
  providers: [
    CreateClient,
    DeleteClient,
    FindAllClients,
    {
      provide: ClientsRepository,
      useClass: InMemoryClientsRepository,
    },
  ],
})
export class HttpModule {}
