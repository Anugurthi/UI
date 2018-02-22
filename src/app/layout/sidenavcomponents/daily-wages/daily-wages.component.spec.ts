import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyWagesComponent } from './daily-wages.component';

describe('DailyWagesComponent', () => {
  let component: DailyWagesComponent;
  let fixture: ComponentFixture<DailyWagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyWagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyWagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
