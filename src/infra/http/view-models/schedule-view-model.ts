import { Schedule } from '@app/entities/schedule';

export class ScheduleViewModel {
  static toHttp(schedule: Schedule) {
    return {
      scheduleId: schedule.id,
      clientId: schedule.clientId,
      service: schedule.service,
      status: schedule.status,
      scheduledDate: schedule.scheduledDate,
      time: schedule.time,
    };
  }
}
