import { SchedulesRepository } from '@app/repositories/schedules-repository';
import { Schedule } from '@app/entities/schedule';
import { Injectable } from '@nestjs/common';

interface FindAllSchedulesResponse {
  schedules: Schedule[];
}

@Injectable()
export class FindAllSchedules {
  constructor(private schedulesRepository: SchedulesRepository) {}

  public async execute(): Promise<FindAllSchedulesResponse> {
    return {
      schedules: await this.schedulesRepository.findAll(),
    };
  }
}
