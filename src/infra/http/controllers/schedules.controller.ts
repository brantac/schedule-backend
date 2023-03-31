import { CancelSchedule } from '@app/use-cases/schedules/cancel-schedule';
import { CreateSchedule } from '@app/use-cases/schedules/create-schedule';
import { FindAllSchedules } from '@app/use-cases/schedules/find-all-schedules';
import { FindSchedule } from '@app/use-cases/schedules/find-schedule';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateScheduleBody } from '../dtos/create-schedule.body';
import { ScheduleViewModel } from '../view-models/schedule-view-model';

@Controller('schedules')
export class SchedulesController {
  constructor(
    private findSchedule: FindSchedule,
    private createSchedule: CreateSchedule,
    private findAllSchedules: FindAllSchedules,
    private cancelSchedule: CancelSchedule,
  ) {}

  @Post()
  async create(@Body() body: CreateScheduleBody) {
    const { clientId, scheduledDate, service, time } = body;

    const { schedule } = await this.createSchedule.execute({
      clientId,
      scheduledDate: new Date(scheduledDate),
      service,
      time,
    });

    return { schedule: ScheduleViewModel.toHttp(schedule) };
  }

  @Get('findAll')
  async findAll() {
    const { schedules } = await this.findAllSchedules.execute();

    return { schedules: schedules.map((v) => ScheduleViewModel.toHttp(v)) };
  }

  @Get(':id')
  async findScheduleById(@Param('id') id: string) {
    const { schedule } = await this.findSchedule.execute({ id });

    return {
      schedule: ScheduleViewModel.toHttp(schedule),
    };
  }

  @Get(':id/cancel')
  async cancel(@Param('id') id: string) {
    await this.cancelSchedule.execute({ id });
  }
}
