import { InMemorySchedulesRepository } from '@test/repositories/in-memory-schedules-repository';
import { CreateSchedule } from './create-schedule';

describe('Create schedule use case', () => {
  it('should create a new schedule', () => {
    const schedulesRepository = new InMemorySchedulesRepository();
    const createSchedule = new CreateSchedule(schedulesRepository);

    expect(schedulesRepository.schedules).toHaveLength(0);

    createSchedule.execute({
      service: 'Gestante',
      scheduledDate: new Date(2023, 3, 20, 10, 0, 0),
      time: '10:00',
      clientId: 'asfasf',
    });

    expect(schedulesRepository.schedules).toHaveLength(1);
    console.log(schedulesRepository.schedules[0]);
  });
});
