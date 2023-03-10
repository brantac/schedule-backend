import { IsNotEmpty, Length } from 'class-validator';

export class CreateClientBody {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @Length(3, 10)
  password: string;
}
