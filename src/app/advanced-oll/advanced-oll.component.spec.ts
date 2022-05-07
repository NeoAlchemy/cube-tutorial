import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedOllComponent } from './advanced-oll.component';

describe('AdvancedOllComponent', () => {
  let component: AdvancedOllComponent;
  let fixture: ComponentFixture<AdvancedOllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedOllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedOllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
