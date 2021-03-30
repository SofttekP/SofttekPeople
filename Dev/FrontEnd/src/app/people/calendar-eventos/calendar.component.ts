import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef
} from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
@Component({

  selector: 'app-calendar-eventos',
  templateUrl: './calendar.component.html',
  
})

export class CalendarsComponent {
  @ViewChild('modalContent', {static: false}) modalContent: TemplateRef<any>;

  constructor() { }
  calendarOptions: CalendarOptions = {
    themeSystem: 'bootstrap',
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    eventClick: this.handleEventClick.bind(this), // bind is important!
    events: 'https://fullcalendar.io/demo-events.json',
  };

  handleDateClick(arg): void {
    console.log('date click! ' + arg.dateStr);
  }
  handleEventClick(arg): void {
    console.log('event click! ' + arg.dateStr);
  }

  
}

