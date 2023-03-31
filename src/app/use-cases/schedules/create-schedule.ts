import { SchedulesRepository } from '@app/repositories/schedules-repository';
import { Schedule, ScheduleProps } from '@app/entities/schedule';
import { Injectable } from '@nestjs/common';

type CreateScheduleRequest = Pick<
  ScheduleProps,
  'clientId' | 'service' | 'scheduledDate' | 'time'
>;

interface CreateScheduleResponse {
  schedule: Schedule;
}

@Injectable()
export class CreateSchedule {
  constructor(private schedulesRepository: SchedulesRepository) {}

  public async execute(
    request: CreateScheduleRequest,
  ): Promise<CreateScheduleResponse> {
    const { clientId, scheduledDate, service, time } = request;

    const schedule = new Schedule({
      clientId,
      scheduledDate,
      service,
      time,
    });

    this.schedulesRepository.create(schedule);

    return { schedule };
  }
}
