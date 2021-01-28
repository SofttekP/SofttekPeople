import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarEventosComponent } from './calendar-eventos.component';

describe('CalendarEventosComponent', () => {
  let component: CalendarEventosComponent;
  let fixture: ComponentFixture<CalendarEventosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarEventosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
