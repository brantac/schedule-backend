import { ScheduleDate } from '@app/entities/schedule-date';
import { InMemorySchedulesRepository } from '@test/repositories/in-memory-schedules-repository';
import { CreateSchedule } from './create-schedule';

describe('Create schedule use case', () => {
  it('should create a new schedule', () => {
    const schedulesRepository = new InMemorySchedulesRepository();
    const createSchedule = new CreateSchedule(schedulesRepository);

    expect(schedulesRepository.schedules).toHaveLength(0);

    createSchedule.execute({
      service: 'Gestante',
      scheduledDate: new ScheduleDate({
        day: 20,
        month: 3,
        year: 2023,
        hours: 10,
        minutes: 0,
        seconds: 0,
      }),
      time: '10:00',
      clientId: 'asfasf',
    });

    expect(schedulesRepository.schedules).toHaveLength(1);
    console.log(schedulesRepository.schedules[0]);
  });
});
