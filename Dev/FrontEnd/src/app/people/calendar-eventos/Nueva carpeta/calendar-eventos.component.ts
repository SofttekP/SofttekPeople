import {  Component,ChangeDetectionStrategy,ViewChild,TemplateRef,OnInit, forwardRef, ChangeDetectorRef } from '@angular/core';
import { startOfDay,endOfDay,subDays,addDays,endOfMonth,isSameDay,isSameMonth,addHours } from 'date-fns';
import { Subject } from 'rxjs';
import { NgbDateStruct, NgbModal, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent,CalendarEventAction,CalendarEventTimesChangedEvent } from 'angular-calendar';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { getSeconds, getMinutes, getHours, getDate, getMonth, getYear, setSeconds, setMinutes, setHours, setDate, setMonth, setYear } from 'date-fns';
const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};


export const DATE_TIME_PICKER_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CalendarEventosComponent),
  multi: true
};


@Component({
  selector: 'app-calendar-eventos',
  templateUrl: './calendar-eventos.component.html',
  styleUrls: ['./calendar-eventos.component.scss']
})
export class CalendarEventosComponent implements OnInit {

 


  @ViewChild('modalContent', {static: false}) modalContent: TemplateRef<any>;

  @Component({
    selector: 'mwl-demo-utils-date-time-picker',
    template: `
      <form class="form-inline">
        <div class="form-group">
          <div class="input-group">
            <input
              readonly
              class="form-control"
              [placeholder]="placeholder"
              name="date"
              [(ngModel)]="dateStruct"
              (ngModelChange)="updateDate()"
              ngbDatepicker
              #datePicker="ngbDatepicker">
              <div class="input-group-append">
                <div class="input-group-text" (click)="datePicker.toggle()" >
                  <i class="fa fa-calendar"></i>
                </div>
              </div>
          </div>
        </div>
      </form>
      <ngb-timepicker
        [(ngModel)]="timeStruct"
        (ngModelChange)="updateTime()"
        [meridian]="true">
      </ngb-timepicker>
    `,
    styles: [
      `
      .form-group {
        width: 100%;
      }
    `
    ],
    providers: [DATE_TIME_PICKER_CONTROL_VALUE_ACCESSOR]
  })

  view: string = 'month';

  newEvent: CalendarEvent;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edit this event', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('This event is deleted!', event);
      }
    }
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'A 3 day event',
      color: colors.red,
      actions: this.actions
    },
    {
      start: startOfDay(new Date()),
      title: 'An event with no end date',
      color: colors.yellow,
      actions: this.actions
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'A long event that spans 2 months',
      color: colors.blue
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: new Date(),
      title: 'A draggable and resizable event',
      color: colors.yellow,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    }
  ];

  activeDayIsOpen: boolean = true;
  
  constructor( private modal: NgbModal, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }
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
    }
  }

  eventTimesChanged({
      event,
    newStart,
    newEnd
    }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
    this.refresh.next();
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    this.newEvent = {
      title: 'New event',
      start: startOfDay(new Date()),
      end: endOfDay(new Date()),
      color: colors.red,
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      actions: this.actions,
    }
    this.events.push(this.newEvent);
    this.handleEvent('Add new event', this.newEvent);
     this.refresh.next();
  }


  date: Date;

  dateStruct: NgbDateStruct;

  timeStruct: NgbTimeStruct;

  datePicker: any;

  private onChangeCallback: (date: Date) => void = () => {};
  writeValue(date: Date): void {
    this.date = date;
    this.dateStruct = {
      day: getDate(date),
      month: getMonth(date) + 1,
      year: getYear(date)
    };
    this.timeStruct = {
      second: getSeconds(date),
      minute: getMinutes(date),
      hour: getHours(date)
    };
    this.cdr.detectChanges();
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {}

  updateDate(): void {
    const newDate: Date = setYear(
      setMonth(
        setDate(this.date, this.dateStruct.day),
        this.dateStruct.month - 1
      ),
      this.dateStruct.year
    );
    this.onChangeCallback(newDate);
  }

  updateTime(): void {
    const newDate: Date = setHours(
      setMinutes(
        setSeconds(this.date, this.timeStruct.second),
        this.timeStruct.minute
      ),
      this.timeStruct.hour
    );
    this.onChangeCallback(newDate);
  }
}
