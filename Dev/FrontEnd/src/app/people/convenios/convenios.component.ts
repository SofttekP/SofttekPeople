import { Component, OnInit,Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import orderData, { IOrder } from 'src/app/data/orders';

@Component({
  selector: 'app-convenios',
  templateUrl: './convenios.component.html',
  styleUrls: ['./convenios.component.scss']
})
export class ConveniosComponent implements OnInit {

  constructor() { }
  orders: IOrder[] = orderData;

  ngOnInit(): void {
  }
}
