import { SchedulesRepository } from '@app/repositories/schedules-repository';
import { Schedule, ScheduleProps } from '@app/entities/schedule';

type CreateScheduleRequest = Pick<
  ScheduleProps,
  'clientId' | 'service' | 'scheduledDate' | 'time'
>;

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
