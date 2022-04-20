import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedPllComponent } from './advanced-pll.component';

describe('AdvancedPllComponent', () => {
  let component: AdvancedPllComponent;
  let fixture: ComponentFixture<AdvancedPllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedPllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedPllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
