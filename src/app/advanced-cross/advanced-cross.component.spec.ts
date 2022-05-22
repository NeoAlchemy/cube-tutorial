import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedCrossComponent } from './advanced-cross.component';

describe('AdvancedCrossComponent', () => {
  let component: AdvancedCrossComponent;
  let fixture: ComponentFixture<AdvancedCrossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedCrossComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedCrossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
