import { Schedule, PhotoshootStatus } from '@app/entities/schedule';
import { InMemorySchedulesRepository } from '@test/repositories/in-memory-schedules-repository';
import { CancelSchedule } from './cancel-schedule';

describe('Cancel schedule use case', () => {
  it('should cancel a schedule', async () => {
    const schedulesRepository = new InMemorySchedulesRepository();
    const cancelSchedule = new CancelSchedule(schedulesRepository);

    await schedulesRepository.create(
      new Schedule({
        clientId: 'asfasf',
        scheduledDate: new Date(2023, 12, 1, 0, 0, 0),
        service: '15 anos',
        time: '10:00',
      }),
    );

    cancelSchedule.execute({ id: schedulesRepository.schedules[0].id });

    expect(schedulesRepository.schedules[0].status).toBe<PhotoshootStatus>(
      'Cancelado',
    );

    expect(schedulesRepository.schedules[0].scheduledDate).toBeNull();
  });
});
