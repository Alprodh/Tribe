export enum Status {
  done = 'done',
  toDo = 'to do',
  canceled = 'canceled'
}

export class RepetedTask {
  constructor( public closedAt: Date, public statut: Status){}
}
