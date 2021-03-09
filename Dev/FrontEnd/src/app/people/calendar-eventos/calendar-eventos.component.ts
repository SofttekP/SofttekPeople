import { Component, OnInit,ChangeDetectionStrategy, ViewChild,TemplateRef } from '@angular/core';
import { addDays, CalendarOptions, startOfDay } from '@fullcalendar/angular';
import { CalendarEvent, CalendarEventAction } from 'angular-calendar';
import { addHours, endOfMonth, subDays } from 'date-fns'; 
import { NgbModal, NgbModalOptions, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

Component({
  selector: 'app-calendar-eventos',
  templateUrl: './calendar-eventos.component.html',
  styleUrls: ['./calendar-eventos.component.scss']
});
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

export class CalendarEventosComponent implements OnInit {
  
  constructor(private modal: NgbModal) { }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    locale: 'locales',
    weekends: false,
    weekNumberCalculation: 'ISO',
    selectable: true
  }


  modalOptions: NgbModalOptions = {
    backdrop: "static"
  };

  
  closeResult: string;
  modalData: {
    action: string;
    event: CalendarEvent;
  };

  handleEvent( event: CalendarEvent, content : string): void {
    this.modal.open(content, this.modalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
  }

  
  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'A 3 day event',
      color: colors.red,
    
    },
    {
      start: startOfDay(new Date()),
      title: 'An event with no end date',
      color: colors.yellow,
      
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
      
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    }
  ];
  handleDateClick(arg): void {
    console.log('date click! ' + arg.dateStr);
  }
  handleEventClick(arg): void {
    console.log('event click! ' + arg.dateStr);
  }
  

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
    } else {
        return `with: ${reason}`;
    }
  };

  ngOnInit(): void {
  };
}
