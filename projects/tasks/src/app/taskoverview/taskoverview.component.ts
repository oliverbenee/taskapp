import { Component } from '@angular/core';
import { Task } from '../model/tasks'

@Component({
  selector: 'tasks-taskoverview',
  templateUrl: './taskoverview.component.html',
  styleUrls: ['./taskoverview.component.css']
})

export class TaskoverviewComponent {

  // show tasks?
  status = false

  // Initial tasks. Follow model Task in tasks.ts
  task: Task = { type: 'daily', description: 'gå en tur', completed: false }
  tasks: Task[] = [
    this.task,
    { type: "daily", description: "vaske op", completed: false },
    { type: "daily", description: "støvsuge", completed: false },
    { type: "weekly", description: "ansøgninger", completed: false }
  ]

  getTasksLeft() { return this.tasks.length }

  getTasksOfState(state: true | false) {
    let count = 0;
    for (const Task in this.tasks) {
      const element = this.tasks[Task];
      if (element.completed == state) count++;
    }
    return count
  }

  submitForm(form: any): void {
    // Access the form values using ngModel
    let taskToAdd: Task = {
      type: form.value.type,
      description: form.value.description,
      completed: false
    }

    // Use the values as needed (e.g., update a field)
    this.tasks.push(taskToAdd)
  }

  // Hide task list toggle. 
  tasksHidden = true;
  toggle() { this.tasksHidden = !this.tasksHidden; }
}
