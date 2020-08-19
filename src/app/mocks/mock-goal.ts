import { Goal } from './../models/Goal';
import { Status } from './../models/RepetedTask';
import { Task, WeekDays } from './../models/Task';
import { RepetedTask } from '../models/RepetedTask';

export const mockGoal = new Goal(
  'Réussir le formation JAVA DevOps',
  new Date( 2020, 9, 10),
  true,
  [
    new Task(
      'TP Github', 'Finir le tp github avec la color team',
    new Date( 2020, 8, 19, 9, 30, 0),
    new Date( 2020, 8, 19, 17, 30, 0),
    [ WeekDays.Wednesday],
    [
      new RepetedTask(
        null,
        null,
        Status.toDo
        )
    ]),
    new Task(
      'TP Github', 'Manger des frites',
    new Date( 2020, 8, 19, 10, 30, 0),
    new Date( 2020, 8, 19, 18, 30, 0),
    [ WeekDays.Monday, WeekDays.Wednesday],
    [
      new RepetedTask(
        null,
        null,
        Status.toDo
        )
    ])

  ]
  );
