import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckandradioComponent } from './checkandradio.component';

describe('CheckandradioComponent', () => {
  let component: CheckandradioComponent;
  let fixture: ComponentFixture<CheckandradioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckandradioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckandradioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
