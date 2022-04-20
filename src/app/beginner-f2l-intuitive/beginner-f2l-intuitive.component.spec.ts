import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeginnerF2lIntuitiveComponent } from './beginner-f2l-intuitive.component';

describe('BeginnerF2lIntuitiveComponent', () => {
  let component: BeginnerF2lIntuitiveComponent;
  let fixture: ComponentFixture<BeginnerF2lIntuitiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeginnerF2lIntuitiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeginnerF2lIntuitiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
