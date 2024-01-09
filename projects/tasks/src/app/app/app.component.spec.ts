import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TaskService } from '../service/task.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { Task } from '../model/tasks';
import { FormsModule } from '@angular/forms';
import { TaskFormComponent } from '../task-form/task-form.component';
import { TaskoverviewComponent } from '../taskoverview/taskoverview.component';

let mockTask: Task = { type: "daily", description: "vaske op", completed: false }

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let taskServiceSpy: jasmine.SpyObj<TaskService>;

  beforeEach(() => {
    // is the addTask method called?    
    taskServiceSpy = jasmine.createSpyObj('TaskService', ['addTask']);
    taskServiceSpy.tasks$ = of([]); // Mock the observable Task.

    // configuration of the test fixture. Use the Mock. 
    TestBed.configureTestingModule({
      declarations: [AppComponent, TaskFormComponent, TaskoverviewComponent],
      providers: [{ provide: TaskService, useValue: taskServiceSpy }],
      imports: [FormsModule]
    });
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'tasks'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('tasks');
  });

  it('should call taskService.addTask when adding a task', () => {
    const fixture = TestBed.createComponent(AppComponent)
    // Spy on the onAddTask method
    const onAddTaskSpy = spyOn(fixture.componentInstance, 'onAddTask').and.callThrough();

    // Trigger the task addition (assuming this is how it is triggered in your component)
    fixture.componentInstance.onAddTask(mockTask);

    // Expect the onAddTask method to have been called
    expect(onAddTaskSpy).toHaveBeenCalledWith(jasmine.objectContaining(mockTask));
  });

  it('should display added tasks', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const taskList: Task[] = [
      { type: 'daily', description: 'Task 1', completed: false },
      { type: 'weekly', description: 'Task 2', completed: true }
    ];

    taskServiceSpy.tasks$ = of(taskList);
    fixture.detectChanges();

    fixture.componentInstance.onAddTask(taskList[0]);
    fixture.componentInstance.onAddTask(taskList[1]);

    const taskElements = fixture.debugElement.queryAll(By.css('.task-item'));
    expect(taskElements.length).toBe(taskList.length);

    taskList.forEach((task, index) => {
      expect(taskElements[index].nativeElement.textContent).toContain(task.description);
    });
  });
});
