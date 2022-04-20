import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeginnerF2lRepetitiveComponent } from './beginner-f2l-repetitive.component';

describe('BeginnerF2lRepetitiveComponent', () => {
  let component: BeginnerF2lRepetitiveComponent;
  let fixture: ComponentFixture<BeginnerF2lRepetitiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeginnerF2lRepetitiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeginnerF2lRepetitiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
