import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleHorizontalPickerComponent } from './simple-horizontal-picker.component';

describe('SimpleHorizontalPickerComponent', () => {
  let component: SimpleHorizontalPickerComponent;
  let fixture: ComponentFixture<SimpleHorizontalPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleHorizontalPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleHorizontalPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
