import { Task, WeekDays } from './../models/Task';

export const mockTask = new Task( 'TP Github', 'Finir le tp github avec la color team',
new Date( 2020, 8, 19, 9, 30, 0), new Date( 2020, 8, 19, 17, 30, 0), [ WeekDays.Wednesday]);
