import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorseToRiderComponent } from './horse-to-rider.component';

describe('HorseToRiderComponent', () => {
  let component: HorseToRiderComponent;
  let fixture: ComponentFixture<HorseToRiderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorseToRiderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorseToRiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
