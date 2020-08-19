export enum Status {
  done = 'done',
  toDo = 'to do',
  canceled = 'canceled',
  closedAt = 'closed at'
}

export class RepetedTask {
  constructor( public date: Date, public statut: Status){}
}
