import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHorsesComponent } from './add-horses.component';

describe('AddHorsesComponent', () => {
  let component: AddHorsesComponent;
  let fixture: ComponentFixture<AddHorsesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHorsesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHorsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
