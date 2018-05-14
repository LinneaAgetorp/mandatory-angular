import { Component } from '@angular/core';
import {UtilService} from '../util.service';
import {StatusType} from '../constants';

@Component({
  selector: 'task-board',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.css']
})
export class TaskboardComponent {

  toggle = false;
  statusTypes = this.utilService.getStatusTypes()

  constructor(private utilService: UtilService) {}

  handleTaskAdded(event) {
    this.toggle = !event;
  }
}
