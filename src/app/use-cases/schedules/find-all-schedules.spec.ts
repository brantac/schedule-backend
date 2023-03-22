import { Schedule } from '@app/entities/schedule';
import { InMemorySchedulesRepository } from '@test/repositories/in-memory-schedules-repository';
import { FindAllSchedules } from './find-all-schedules';

describe('Find all schedules use case', () => {
  it('should find all schedules', async () => {
    const schedulesRepository = new InMemorySchedulesRepository();
    const findAllSchedules = new FindAllSchedules(schedulesRepository);

    await schedulesRepository.create(
      new Schedule({
        clientId: 'asfasf',
        scheduledDate: new Date(2023, 3, 20, 10, 0, 0),
        service: '15 anos',
        time: '10:00',
      }),
    );
    await schedulesRepository.create(
      new Schedule({
        clientId: 'asfasf',
        scheduledDate: new Date(2023, 3, 20, 10, 0, 0),
        service: '15 anos',
        time: '10:00',
      }),
    );
    await schedulesRepository.create(
      new Schedule({
        clientId: 'asfasf',
        scheduledDate: new Date(2023, 3, 20, 10, 0, 0),
        service: '15 anos',
        time: '10:00',
      }),
    );

    const schedules = await findAllSchedules.execute();

    expect(schedules[0]).toMatchObject<Date>(new Date(2023, 3, 20, 10, 0, 0));

    expect(schedules).toHaveLength(3);
  });
});
