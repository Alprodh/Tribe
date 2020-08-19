import { repeatedTaskDto } from './../mocks/mock-repeatedTasksDto';
import { RepeatedTaskDto } from './../Dto/RepeatedTaskDto';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getAllRepeatedTask(): RepeatedTaskDto | void {
      return repeatedTaskDto;
  }
}
