import { Component, Input } from '@angular/core';
import { Task } from '../model/tasks'
import { TaskService } from '../service/task.service';
import { OrderLexicographicallyPipe } from '../pipes/orderLexicographically.pipe';
import { TaskFilterService } from '../service/task-filter.service';

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

  constructor(private taskService: TaskService, private taskFilterService: TaskFilterService) { }
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  ngOnInit(): void {
    // Subscribe after constructor to ensure mock-objects are added.
    this.taskService.tasks$.subscribe(tasksFromService => this.tasks = tasksFromService)
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

  // Hide task list toggle. 
  tasksHidden = true;
  toggle() { this.tasksHidden = !this.tasksHidden; }

  // Filter tasks.
  filterBy(descInput: HTMLInputElement) {
    console.log(`Filtering for tasks. Key: '${descInput.value}' `)
    let filteredTasks = this.taskFilterService.applyFilter(descInput.value).subscribe(filteredTasks => { this.tasks = filteredTasks; })
    return filteredTasks;
  }
}
