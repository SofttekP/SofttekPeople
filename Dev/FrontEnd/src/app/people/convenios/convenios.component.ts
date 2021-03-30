import { Component, OnInit,Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import orderData, { IOrder } from 'src/app/data/orders';
import { ConveniosDataService } from './convenios.data.service';
import { Convenios } from '../../models/convenios';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-convenios',
  templateUrl: './convenios.component.html',
  styleUrls: ['./convenios.component.scss']
})
export class ConveniosComponent implements OnInit {

  datosConveniosAsync : any;



  constructor( private translateService: TranslateService, private conveniosDatService: ConveniosDataService, private modalService: NgbModal,private lightbox: Lightbox) { }
  orders: IOrder[] = orderData;

  ngOnInit(): void {
    this.conveniosDatService.getConvenios().subscribe(
      data => {
        this.datosConveniosAsync = data;
      });
  }

  openLightbox(src: string): void {
    this.lightbox.open([{ src, thumb: '' }], 0, { centerVertically: true, positionFromTop: 0, disableScrolling: true, wrapAround: true });
  }
}
