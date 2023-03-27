import { SchedulesRepository } from '@app/repositories/schedules-repository';
import { Injectable } from '@nestjs/common';

interface CancelScheduleRequest {
  id: string;
}

type CancelScheduleResponse = void;

@Injectable()
export class CancelSchedule {
  constructor(private schedulesRepository: SchedulesRepository) {}

  public async execute(
    request: CancelScheduleRequest,
  ): Promise<CancelScheduleResponse> {
    const { id } = request;

    await this.schedulesRepository.cancel(id);
  }
}
