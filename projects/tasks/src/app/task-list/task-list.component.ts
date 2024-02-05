import { Component, Input } from '@angular/core';
import { Task } from '../model/tasks'
import { TaskService } from '../service/task.service';
import { OrderLexicographicallyPipe } from '../pipes/orderLexicographically.pipe';

@Component({
  selector: 'tasks-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

/**
 * This is a Dumb component. 
 * It just presents data. 
 */
export class TaskListComponent {
  status = false // show tasks toggle. 

  @Input()
  tasks: Task[] = []

  constructor(private taskService: TaskService) {
    this.taskService.tasks$.subscribe(tasks => this.tasks = tasks)
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  getTasksLength() { return this.tasks.length }

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
