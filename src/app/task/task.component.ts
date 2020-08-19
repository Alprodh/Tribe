import { DataService } from './../services/data.service';
import { RepeatedTaskDto } from './../Dto/RepeatedTaskDto';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  repeatedTasksDto: RepeatedTaskDto[];

  constructor(
    protected service: DataService
  ) { }

  ngOnInit(): void {
  }

}
