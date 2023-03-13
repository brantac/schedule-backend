import { randomUUID } from 'node:crypto';

type Service = 'Gestante' | 'Smash The Cake' | 'Casal' | '15 anos';

type PhotoshootStatus = 'Agendado' | 'Concluído' | 'Cancelado';

interface ScheduleProps {
  service: Service;
  createdAt: Date;
  scheduledDate: Date;
  time: string;
  status: PhotoshootStatus;
  clientId: string;
}

type CreateScheduleProps = Omit<ScheduleProps, 'createdAt' | 'status'>;

export class Schedule {
  private _id: string;
  private scheduleProps: ScheduleProps;

  constructor(props: CreateScheduleProps, id?: string) {
    this.create(props);
    this._id = id ?? randomUUID();
  }

  public get id(): string {
    return this._id;
  }

  public get service(): Service {
    return this.scheduleProps.service;
  }

  public get createdAt(): Date {
    return this.scheduleProps.createdAt;
  }

  public get scheduledDate(): Date {
    return this.scheduleProps.scheduledDate;
  }

  public get time(): string {
    return this.scheduleProps.time;
  }

  public get status(): PhotoshootStatus {
    return this.scheduleProps.status;
  }

  private create(props: CreateScheduleProps): void {
    this.scheduleProps = {
      ...props,
      createdAt: new Date(),
      status: 'Agendado',
    };
  }

  public cancel(): void {
    this.scheduleProps.scheduledDate = null;
    this.scheduleProps.status = 'Cancelado';
  }
}

// Coleção criado pelo Bing para armazenar agendamentos de um estúdio fotográfico
// const agendamento = {
//   _id: ObjectId('5c7f8f9b4d0b4e0012d6c8f9'),
//   cliente: {
//     nome: 'Maria',
//     telefone: '(11) 99999-9999',
//     email: 'maria@gmail.com',
//   },
//   data: ISODate('2023-03-10T00:00:00Z'),
//   horario: '14:00',
//   servico: 'book',
//   status: 'confirmado',
// };
