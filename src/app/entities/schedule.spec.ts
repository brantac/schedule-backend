import { Schedule } from './schedule';
import { ScheduleDate } from './schedule-date';

describe('Schedule', () => {
  it('should create a new schedule', () => {
    const schedule = new Schedule({
      service: 'Casal',
      scheduledDate: new ScheduleDate({
        day: 20,
        month: 3,
        year: 2023,
        hours: 10,
        minutes: 0,
        seconds: 0,
      }),
      time: '10:00',
      clientId: 'asdasdas',
    });

    expect(schedule.status).toBe('Agendado');
  });
});
