import { Schedule } from '@app/entities/schedule';
import { InMemorySchedulesRepository } from '@test/repositories/in-memory-schedules-repository';
import { FindAllSchedules } from './find-all-schedules';

describe('Find all schedules use case', () => {
  it('should find all schedules', async () => {
    const schedulesRepository = new InMemorySchedulesRepository();
    const findAllSchedules = new FindAllSchedules(schedulesRepository);

    const scheduledDate = new Date(2023, 3, 20, 10, 0, 0);

    const newSchedule = new Schedule({
      clientId: 'asfasf',
      scheduledDate: scheduledDate,
      service: '15 anos',
      time: '10:00',
    });

    await schedulesRepository.create(newSchedule);
    await schedulesRepository.create(newSchedule);
    await schedulesRepository.create(newSchedule);

    const { schedules } = await findAllSchedules.execute();

    expect(schedules).toHaveLength(3);

    expect(schedules[0]).toMatchObject<Schedule>(newSchedule);
    expect(schedules[1]).toMatchObject<Schedule>(newSchedule);
    expect(schedules[2]).toMatchObject<Schedule>(newSchedule);
  });
});
