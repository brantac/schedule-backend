import { Schedule } from '../entities/schedule';

export abstract class SchedulesRepository {
  abstract create(schedule: Schedule): Promise<void>;
  abstract cancel(id: string): Promise<void>;
  abstract save(schedule: Schedule): Promise<void>;
  abstract findById(id: string): Promise<Schedule>;
  abstract findManyByClientId(id: string): Promise<Schedule[]>;
  abstract findAll(): Promise<Schedule[]>;
}
