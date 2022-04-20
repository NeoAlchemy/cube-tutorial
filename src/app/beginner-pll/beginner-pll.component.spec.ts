import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeginnerPllComponent } from './beginner-pll.component';

describe('BeginnerPllComponent', () => {
  let component: BeginnerPllComponent;
  let fixture: ComponentFixture<BeginnerPllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeginnerPllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeginnerPllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
