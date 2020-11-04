import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorsesDetailsComponent } from './horses-details.component';

describe('HorsesDetailsComponent', () => {
  let component: HorsesDetailsComponent;
  let fixture: ComponentFixture<HorsesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorsesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorsesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
