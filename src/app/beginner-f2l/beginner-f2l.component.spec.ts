import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeginnerF2lComponent } from './beginner-f2l.component';

describe('BeginnerF2lComponent', () => {
  let component: BeginnerF2lComponent;
  let fixture: ComponentFixture<BeginnerF2lComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeginnerF2lComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeginnerF2lComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
