import { Component, OnInit,ChangeDetectionStrategy, ViewChild,TemplateRef } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
@Component({
  selector: 'app-calendar-eventos',
  templateUrl: './calendar-eventos.component.html',
  styleUrls: ['./calendar-eventos.component.scss']
})
export class CalendarEventosComponent implements OnInit {

  constructor() { }
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth'
  };
  handleDateClick(arg): void {
    console.log('date click! ' + arg.dateStr);
  }
  handleEventClick(arg): void {
    console.log('event click! ' + arg.dateStr);
  }
  ngOnInit(): void {
  }

}
