import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksandpostsviewComponent } from './tasksandpostsview.component';

describe('TasksandpostsviewComponent', () => {
  let component: TasksandpostsviewComponent;
  let fixture: ComponentFixture<TasksandpostsviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksandpostsviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksandpostsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
