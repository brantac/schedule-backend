import { Schedule } from '@app/entities/schedule';
import { InMemorySchedulesRepository } from '@test/repositories/in-memory-schedules-repository';
import { FindSchedule } from './find-schedule';

describe('Find schedule use case', () => {
  it('should find schedule by Id', async () => {
    const schedulesRepository = new InMemorySchedulesRepository();
    const findSchedule = new FindSchedule(schedulesRepository);

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

    const { id: scheduleId } = schedulesRepository.schedules[1];

    const { schedule } = await findSchedule.execute({
      id: scheduleId,
    });

    expect(schedule.scheduledDate).toMatchObject<Date>(
      new Date(2023, 3, 20, 10, 0, 0),
    );
    expect(schedule.status).toBe('Agendado');
  });

  test.todo('should throw an error when a schedule is not found');
});
