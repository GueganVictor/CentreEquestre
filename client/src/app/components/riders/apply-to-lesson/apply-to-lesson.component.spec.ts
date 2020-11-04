import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyToLessonComponent } from './apply-to-lesson.component';

describe('ApplyToLessonComponent', () => {
  let component: ApplyToLessonComponent;
  let fixture: ComponentFixture<ApplyToLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyToLessonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyToLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
