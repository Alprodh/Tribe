import { RepetedTask } from './RepetedTask';

export enum WeekDays {
  Monday = 'MONDAY',
  Tuesday = 'TUESDAY',
  Wednesday = 'WEDNESDAY',
  Thursday = 'THURSDAY',
  Friday = 'FRIDAY',
  Saturday = 'SATURDAY',
  Sunday = 'SUNDAY'
}

export class Task {
  constructor(
    public name: string,
    public description: string,
    public time: Date,
    public deadline: Date,
    public repetition: WeekDays[],
    public taskList?: RepetedTask[]
    ){}
}
