import { SchedulesRepository } from '@app/repositories/schedules-repository';
import { Schedule, Service } from '@app/entities/schedule';
import { ScheduleDate } from '@app/entities/schedule-date';

interface CreateScheduleRequest {
  service: Service;
  scheduledDate: ScheduleDate;
  time: string;
  clientId: string;
}

type CreateScheduleResponse = void;

export class CreateSchedule {
  constructor(private schedulesRepository: SchedulesRepository) {}

  public async execute(
    request: CreateScheduleRequest,
  ): Promise<CreateScheduleResponse> {
    const { clientId, scheduledDate, service, time } = request;

    this.schedulesRepository.create(
      new Schedule({
        clientId,
        scheduledDate,
        service,
        time,
      }),
    );
  }
}
