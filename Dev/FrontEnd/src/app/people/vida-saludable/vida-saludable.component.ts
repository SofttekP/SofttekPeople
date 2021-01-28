import {  Component, OnInit, AfterViewChecked } from '@angular/core';
import { vidaSaludableDataService,VidaSaludable } from './vida-saludable.data.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { HighlightService } from '../../shared/highlight.service';



@Component({
  selector: 'app-vida-saludable',
  templateUrl: './vida-saludable.component.html',
  styleUrls: ['./vida-saludable.component.scss'],
  providers: [NgbCarouselConfig]
})
export class VidaSaludableComponent implements   OnInit{
  
  listaVidaSaludables:any;
  listaImagenes: any;
  highlighted: boolean = false;
  

  constructor(private vidaSaludableDataService: vidaSaludableDataService, config: NgbCarouselConfig, private highlightService: HighlightService) {
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = true;
    config.showNavigationArrows = true;
  }
  
   ngOnInit(): void {

      this.vidaSaludableDataService.getItemsVidaSaludable().subscribe(
        data => {
          this.listaVidaSaludables =  data;
      });
  }

  
}
