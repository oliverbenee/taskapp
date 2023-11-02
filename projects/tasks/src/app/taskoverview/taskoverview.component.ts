import { Component, OnInit } from '@angular/core';
import { TaskList, Task } from './tasks';

@Component({
  selector: 'tasks-taskoverview',
  templateUrl: './taskoverview.component.html',
  styleUrls: ['./taskoverview.component.css']
})

export class TaskoverviewComponent implements OnInit {

  // show tasks?
  status = false

  // Task fields. 
  task: Task = { type: 'daily', description: 'gå en tur', completed: false }

  taskSummary: Task[] = [
    this.task,
    { type: "daily", description: "vaske op", completed: false },
    { type: "daily", description: "støvsuge", completed: false }
  ]

  tasks: TaskList = {
    completed: 1,
    todo: 2,
    total: this.taskSummary.length,
    summary: this.taskSummary
  }

  getTasksLength() { return this.taskSummary.length }

  getTasksOfState(state: true | false) {
    let count = 0;
    for (const Task in this.taskSummary) {
      const element = this.taskSummary[Task];
      if (element.completed == state) count++;
    }
    return count
  }

  // Hide task list toggle. 
  tasksHidden = false;
  toggle() { this.tasksHidden = !this.tasksHidden; }

  ngOnInit(): void { }
}
