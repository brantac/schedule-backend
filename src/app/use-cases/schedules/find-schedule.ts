import { SchedulesRepository } from '@app/repositories/schedules-repository';
import { Schedule } from '@app/entities/schedule';
import { Injectable } from '@nestjs/common';
import { ScheduleNotFound } from '../errors/schedule-not-found';

interface FindScheduleRequest {
  id: string;
}

type FindScheduleResponse = {
  schedule: Schedule;
};

@Injectable()
export class FindSchedule {
  constructor(private schedulesRepository: SchedulesRepository) {}

  public async execute(
    request: FindScheduleRequest,
  ): Promise<FindScheduleResponse> {
    const { id } = request;

    const schedule = await this.schedulesRepository.findById(id);

    if (!schedule) throw new ScheduleNotFound();

    return { schedule };
  }
}
