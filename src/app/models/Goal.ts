import { Task } from './Task';

export class Goal {
  constructor(
    public description: string,
    public deadline: Date,
    public isActive: boolean,
    public tasks: Task[]
    ){}
}
