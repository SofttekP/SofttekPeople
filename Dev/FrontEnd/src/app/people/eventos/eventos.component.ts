import { Component, OnInit } from '@angular/core';
import { eventosDataService,IEventos } from './eventos.data.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { HighlightService } from '../../shared/highlight.service';



@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {


  listaEventos:any;
  listaImagenes: any;
  highlighted: boolean = false;


  constructor(private eventosDataService: eventosDataService, config: NgbCarouselConfig, private highlightService: HighlightService) { 
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = true;
    config.showNavigationArrows = true;
  }
  

  ngOnInit(): void {

    this.eventosDataService.getItemsEventos().subscribe(
      data => {
        this.listaEventos =  data;
    });
}

}
