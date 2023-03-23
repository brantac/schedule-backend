import { SchedulesRepository } from '@app/repositories/schedules-repository';
import { Schedule } from '@app/entities/schedule';

interface FindAllSchedulesResponse {
  schedules: Schedule[];
}

export class FindAllSchedules {
  constructor(private schedulesRepository: SchedulesRepository) {}

  public async execute(): Promise<FindAllSchedulesResponse> {
    return {
      schedules: await this.schedulesRepository.findAll(),
    };
  }
}
