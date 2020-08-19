import { DataService } from './../services/data.service';
import { RepeatedTaskDto } from './../Dto/RepeatedTaskDto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-buzz',
  templateUrl: './feed-buzz.component.html',
  styleUrls: ['./feed-buzz.component.css']
})
export class FeedBuzzComponent implements OnInit {
  repeatedTasksDto: RepeatedTaskDto[];

  constructor(

    protected dataService: DataService
  ) { }

  ngOnInit(): void {
    this.repeatedTasksDto = this.dataService.getAllRepeatedTasks();
  }

}
