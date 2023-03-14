interface ScheduleDateProps {
  year: number;
  month: number;
  day: number;
  hours: number;
  minutes: number;
  seconds?: number;
}

export class ScheduleDate {
  public scheduleDate: Date;

  constructor(props: ScheduleDateProps) {
    this.scheduleDate = new Date(
      props.year,
      props.month - 1,
      props.day,
      props.hours,
      props.minutes,
      props.seconds ?? 0,
    );
  }
}
