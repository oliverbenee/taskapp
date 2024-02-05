import { Component, Output, EventEmitter } from '@angular/core';
import { Task, TaskType } from '../model/tasks';

@Component({
  selector: 'tasks-task-form',
  templateUrl: './task-form.component.html'
})

/**
 * This is a Smart component. 
 * It interacts with the service to add list content. 
 * It interacts with the list component to add content.
 */

export class TaskFormComponent {
  selectedTaskType: TaskType = 'other'; // Variable to store the selected task type
  taskDescription: string = '';

  @Output() addTask = new EventEmitter<Task>();

  submitForm(): void {
    let obj: Task = {
      type: this.selectedTaskType,
      description: this.taskDescription,
      completed: false
    }
    this.addTask.emit(obj)
    console.log("Object ", obj, " emitted. ")

    // reset fields
    this.selectedTaskType = 'other';
    this.taskDescription = '';
  }
}
