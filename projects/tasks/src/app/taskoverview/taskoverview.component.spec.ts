import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskoverviewComponent } from './taskoverview.component';

describe('TaskoverviewComponent', () => {
  let component: TaskoverviewComponent;
  let fixture: ComponentFixture<TaskoverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskoverviewComponent]
    });
    fixture = TestBed.createComponent(TaskoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
