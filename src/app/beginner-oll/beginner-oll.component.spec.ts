import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeginnerOllComponent } from './beginner-oll.component';

describe('BeginnerOllComponent', () => {
  let component: BeginnerOllComponent;
  let fixture: ComponentFixture<BeginnerOllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeginnerOllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeginnerOllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
