import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeginnerCfopComponent } from './beginner-cfop.component';

describe('BeginnerCfopComponent', () => {
  let component: BeginnerCfopComponent;
  let fixture: ComponentFixture<BeginnerCfopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeginnerCfopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeginnerCfopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
