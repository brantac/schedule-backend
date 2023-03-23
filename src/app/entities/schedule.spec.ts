import { Schedule } from './schedule';

describe('Schedule', () => {
  it('should create a new schedule', () => {
    const scheduledDate = new Date(2023, 3, 20, 10, 0, 0);

    const schedule = new Schedule({
      service: 'Casal',
      scheduledDate: scheduledDate,
      time: '10:00',
      clientId: 'asdasdas',
    });

    expect(schedule.status).toBe('Agendado');
    expect(schedule.clientId).toBe('asdasdas');
    expect(schedule.time).toBe('10:00');
    expect(schedule.scheduledDate).toBe(scheduledDate);
    expect(schedule.service).toBe('Casal');
  });
});
