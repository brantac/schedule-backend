import { SchedulesRepository } from '@app/repositories/schedules-repository';

interface CancelScheduleRequest {
  id: string;
}

type CancelScheduleResponse = void;

export class CancelSchedule {
  constructor(private schedulesRepository: SchedulesRepository) {}

  public async execute(
    request: CancelScheduleRequest,
  ): Promise<CancelScheduleResponse> {
    const { id } = request;

    await this.schedulesRepository.cancel(id);
  }
}
