import { TestBed } from '@angular/core/testing';
import { TaskService } from './task.service';
import { take } from 'rxjs/operators';
import { Task } from '../model/tasks'

describe('TaskService', () => {
  let taskService: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [TaskService] });
    taskService = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(taskService).toBeTruthy();
  });

  it('should add a task', (done) => {
    const task: Task = { type: 'daily', description: 'Do something', completed: false };

    taskService.addTask(task);

    taskService.tasks$.pipe(take(1)).subscribe((tasks) => {
      expect(tasks.length).toBe(1);
      expect(tasks[0]).toEqual(task);
      done();
    });
  });

  it('should add multiple tasks', (done) => {
    const task1: Task = { type: 'daily', description: 'Task 1', completed: false };
    const task2: Task = { type: 'weekly', description: 'Task 2', completed: true };

    taskService.addTask(task1);
    taskService.addTask(task2);

    taskService.tasks$.pipe(take(1)).subscribe((tasks) => {
      expect(tasks.length).toBe(2);
      expect(tasks).toEqual([task1, task2]);
      done();
    });
  });
});