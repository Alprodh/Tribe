import { RepeatedTaskDto } from './../Dto/RepeatedTaskDto';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input()
  repeatedTaskDto: RepeatedTaskDto;

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
