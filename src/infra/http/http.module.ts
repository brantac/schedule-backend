import { ClientsRepository } from '@app/repositories/clients-repository';
import { SchedulesRepository } from '@app/repositories/schedules-repository';
import { CreateClient } from '@app/use-cases/create-client';
import { DeleteClient } from '@app/use-cases/delete-client';
import { FindAllClients } from '@app/use-cases/find-all-clients';
import { CreateSchedule } from '@app/use-cases/schedules/create-schedule';
import { FindSchedule } from '@app/use-cases/schedules/find-schedule';
import { Module } from '@nestjs/common';
import { InMemoryClientsRepository } from '@test/repositories/in-memory-clients-repository';
import { InMemorySchedulesRepository } from '@test/repositories/in-memory-schedules-repository';
import { ClientsController } from './controllers/clients.controller';
import { SchedulesController } from './controllers/schedules.controller';

@Module({
  imports: [],
  controllers: [ClientsController, SchedulesController],
  providers: [
    CreateClient,
    DeleteClient,
    FindAllClients,
    CreateSchedule,
    FindSchedule,
    {
      provide: ClientsRepository,
      useClass: InMemoryClientsRepository,
    },
    {
      provide: SchedulesRepository,
      useClass: InMemorySchedulesRepository,
    },
  ],
})
export class HttpModule {}
