import { Schedule } from './schedule';

describe('Schedule', () => {
  it('should create a new schedule', () => {
    const schedule = new Schedule({
      service: 'Casal',
      scheduledDate: new Date('07/03/2023'),
      time: '10:00',
    });

    expect(schedule.status).toBe('Agendado');
  });
});
