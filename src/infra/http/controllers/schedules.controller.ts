import { CreateSchedule } from '@app/use-cases/schedules/create-schedule';
import { FindSchedule } from '@app/use-cases/schedules/find-schedule';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateScheduleBody } from '../dtos/create-schedule.body';

@Controller('schedules')
export class SchedulesController {
  constructor(
    private findSchedule: FindSchedule,
    private createSchedule: CreateSchedule,
  ) {}

  @Post()
  async create(@Body() body: CreateScheduleBody) {
    const { clientId, scheduledDate, service, time } = body;

    await this.createSchedule.execute({
      clientId,
      scheduledDate: new Date(scheduledDate),
      service,
      time,
    });
  }

  @Get(':id')
  async findScheduleById(@Param('id') id: string) {
    const { schedule } = await this.findSchedule.execute({ id });

    return {
      id: schedule.id,
      clientId: schedule.clientId,
      service: schedule.service,
      scheduledDate: schedule.scheduledDate,
      status: schedule.status,
    };
  }
}
