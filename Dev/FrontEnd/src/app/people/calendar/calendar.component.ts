import { Component, ChangeDetectionStrategy, ViewChild, TemplateRef, Input} from '@angular/core';
import { startOfDay,  subDays, addDays, endOfMonth, isSameDay, isSameMonth } from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent,  CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';

const colors: any = {
  verde: {
    primary: '#86c726',
    secondary: '#c0e18e',
  },
  azul: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  amarillo: {
    primary: '#072a5e',
    secondary: '#072a5e',
  },
};



@Component({
  selector: 'app-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})

export class CalendarsComponent {
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;
  @Input()
  view: CalendarView = CalendarView.Month;
  ngSwitch: string;
  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'Evento del día',
      color: colors.verde,
      allDay: true,
    },
    {
      start: startOfDay(new Date()),
      title: 'Un evento sin fecha de finalización',
      color: colors.amarillo
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'Un evento largo que dura 2 meses.',
      color: colors.azul,
      allDay: true,
    }
  ];

  activeDayIsOpen: boolean = true;

  constructor(private modal: NgbModal) {}

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
}