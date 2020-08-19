import { User } from './../models/user';
import { Goal } from '../models/goal';
import { Task, WeekDays } from './../models/Task';
import { RepetedTask } from '../models/RepetedTask';
import { Status } from './../models/RepetedTask';

export const user = new User(
  123,
  'color',
  'team',
  'zbida',
  'zbida@.com',
  'pass',
  new Date(2020, 9, 8)
  );
