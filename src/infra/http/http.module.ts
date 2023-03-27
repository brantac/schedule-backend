import { ClientsRepository } from '@app/repositories/clients-repository';
import { SchedulesRepository } from '@app/repositories/schedules-repository';
import { CreateClient } from '@app/use-cases/clients/create-client';
import { DeleteClient } from '@app/use-cases/clients/delete-client';
import { FindAllClients } from '@app/use-cases/clients/find-all-clients';
import { CancelSchedule } from '@app/use-cases/schedules/cancel-schedule';
import { CreateSchedule } from '@app/use-cases/schedules/create-schedule';
import { FindAllSchedules } from '@app/use-cases/schedules/find-all-schedules';
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
    FindAllSchedules,
    CancelSchedule,
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
