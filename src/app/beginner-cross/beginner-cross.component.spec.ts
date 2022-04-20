import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeginnerCrossComponent } from './beginner-cross.component';

describe('BeginnerCrossComponent', () => {
  let component: BeginnerCrossComponent;
  let fixture: ComponentFixture<BeginnerCrossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeginnerCrossComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeginnerCrossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
