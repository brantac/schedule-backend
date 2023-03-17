import { Schedule } from './schedule';

describe('Schedule', () => {
  it('should create a new schedule', () => {
    const schedule = new Schedule({
      service: 'Casal',
      scheduledDate: new Date(2023, 3, 20, 10, 0, 0),
      time: '10:00',
      clientId: 'asdasdas',
    });

    expect(schedule.status).toBe('Agendado');
  });
});
