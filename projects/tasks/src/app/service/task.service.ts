import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Task } from '../model/tasks';
import { TaskFilterService } from './task-filter.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasksSubject = new BehaviorSubject<Task[]>([]);
  tasks$: Observable<Task[]> = this.tasksSubject.asObservable();

  addTask(newTask: Task): void {
    const currentTasks = this.tasksSubject.value;
    this.tasksSubject.next([...currentTasks, newTask]);
  }

  // Initial tasks. Follow model Task in tasks.ts
  task: Task = { type: 'daily', description: 'gå en tur', completed: false }
  task2: Task = { type: "daily", description: "vaske op", completed: false }
  task3: Task = { type: "daily", description: "støvsuge", completed: false }
  task4: Task = { type: "weekly", description: "ansøgninger", completed: false }

  constructor() {
    this.addTask(this.task);
    this.addTask(this.task2);
    this.addTask(this.task3);
    this.addTask(this.task4);
  }
}