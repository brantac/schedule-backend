import { Schedule } from '@app/entities/schedule';
import { InMemorySchedulesRepository } from '@test/repositories/in-memory-schedules-repository';
import { CreateSchedule } from './create-schedule';

describe('Create schedule use case', () => {
  it('should create a new schedule', async () => {
    const schedulesRepository = new InMemorySchedulesRepository();
    const createSchedule = new CreateSchedule(schedulesRepository);

    expect(schedulesRepository.schedules).toHaveLength(0);

    const { schedule } = await createSchedule.execute({
      service: 'Gestante',
      scheduledDate: new Date(2023, 3, 20, 10, 0, 0),
      time: '10:00',
      clientId: 'asfasf',
    });

    expect(schedulesRepository.schedules).toHaveLength(1);
    expect(schedulesRepository.schedules[0]).toMatchObject<Schedule>(schedule);
  });
});
