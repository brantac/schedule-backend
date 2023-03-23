import { Schedule } from '@app/entities/schedule';
import { SchedulesRepository } from '@app/repositories/schedules-repository';
import { ScheduleNotFound } from '@app/use-cases/errors/schedule-not-found';

export class InMemorySchedulesRepository implements SchedulesRepository {
  public schedules: Schedule[] = [];

  async create(schedule: Schedule): Promise<void> {
    this.schedules.push(schedule);
  }

  async findById(id: string): Promise<Schedule> {
    return this.schedules.filter((v) => v.id === id)[0];
  }

  async cancel(id: string): Promise<void> {
    const index = this.schedules.findIndex((s) => s.id === id);
    this.schedules[index].cancel();
  }

  async save(schedule: Schedule): Promise<void> {
    const index = this.schedules.findIndex((s) => s.id === schedule.id);

    if (!index) {
      throw new ScheduleNotFound();
    }

    this.schedules[index] = schedule;
  }

  async findManyByClientId(id: string): Promise<Schedule[]> {
    return this.schedules.filter((s) => s.clientId === id);
  }

  async findAll(): Promise<Schedule[]> {
    return this.schedules;
  }
}
