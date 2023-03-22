import { Service } from '@app/entities/schedule';
import { IsDate, IsNotEmpty } from 'class-validator';

export class CreateScheduleBody {
  @IsNotEmpty()
  clientId: string;

  @IsNotEmpty()
  service: Service;

  @IsNotEmpty()
  scheduledDate: number;

  @IsNotEmpty()
  time: string;
}
