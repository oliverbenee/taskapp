import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Task } from '../model/tasks';
import { TaskService } from './task.service';

@Injectable({
  providedIn: 'root'
})
export class TaskFilterService {
  private filteredTasksSubject: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);
  public filteredTasks$: Observable<Task[]> = this.filteredTasksSubject.asObservable();


  constructor(private taskService: TaskService) { }

  applyFilter(keyword: string): Observable<Task[]> {
    if (!keyword) { return this.taskService.tasks$ }
    return this.taskService.tasks$.pipe(
      map(tasks => tasks.filter(task => task.description.includes(keyword)))
    )
  }
}
