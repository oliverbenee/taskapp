import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../model/tasks';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasksSubject = new BehaviorSubject<Task[]>([]);
  tasks$: Observable<Task[]> = this.tasksSubject.asObservable();

  addTask(taskName: Task): void {
    const currentTasks = this.tasksSubject.value;
    this.tasksSubject.next([...currentTasks, taskName]);
  }
}