import { Component } from '@angular/core';

import { TaskService } from '../service/task.service';
import { Task } from '../model/tasks'

@Component({
  selector: 'tasks-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tasks';

  taskList: Task[] = [];
  constructor(private taskService: TaskService) { }

  onAddTask(task: Task): void {
    console.log("RECEIVED EMISSION. ")
    this.taskService.addTask(task)
  }
}
