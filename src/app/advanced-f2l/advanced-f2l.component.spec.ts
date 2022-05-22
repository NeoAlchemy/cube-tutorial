import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedF2lComponent } from './advanced-f2l.component';

describe('AdvancedF2lComponent', () => {
  let component: AdvancedF2lComponent;
  let fixture: ComponentFixture<AdvancedF2lComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedF2lComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedF2lComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
