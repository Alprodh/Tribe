import { RepeatedTaskDto } from './../../../tribe-app/src/app/Dto/RepeatedTaskDto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  repeatedTasksDto: RepeatedTaskDto;

  constructor() { }

  ngOnInit(): void {
  }

}
