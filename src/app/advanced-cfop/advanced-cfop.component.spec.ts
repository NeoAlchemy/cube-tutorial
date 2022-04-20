import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedCfopComponent } from './advanced-cfop.component';

describe('AdvancedCfopComponent', () => {
  let component: AdvancedCfopComponent;
  let fixture: ComponentFixture<AdvancedCfopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedCfopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedCfopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
