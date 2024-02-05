import { Component } from '@angular/core';

import { TaskService } from '../service/task.service';
import { Task } from '../model/tasks'

/**
 * This is a smart component. Because it has to receive emissions from the task list to add to the service. 
 */
@Component({
  selector: 'tasks-root',
  templateUrl: './app.component.html'
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
