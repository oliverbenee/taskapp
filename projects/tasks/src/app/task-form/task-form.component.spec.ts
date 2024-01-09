import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms'

import { TaskFormComponent } from './task-form.component';


describe('TaskFormComponent', () => {
  let component: TaskFormComponent;
  let fixture: ComponentFixture<TaskFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskFormComponent],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(TaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
