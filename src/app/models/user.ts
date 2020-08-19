import { Goal } from './Goal';

export class User {
  constructor(
    protected id: number,
    protected firstName: string,
    protected lastName: string,
    protected pseudo: string,
    protected email: string,
    protected pass: string,
    protected registrationDate: Date,
    protected goal?: Goal
  ) {}

}
