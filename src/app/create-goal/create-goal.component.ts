import { Task } from './../models/Task';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-goal',
  templateUrl: './create-goal.component.html',
  styleUrls: ['./create-goal.component.css']
})
export class CreateGoalComponent implements OnInit {

  displayForm = false;
  task: Task;

  constructor() { }

  ngOnInit(): void {
  }

}
