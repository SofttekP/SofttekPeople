import {  Component, OnInit, AfterViewChecked } from '@angular/core';
import { vidaSaludableDataService } from './vida-saludable.data.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { HighlightService } from '../../shared/highlight.service';
import { IProduct } from 'src/app/data/api.service';
import products from 'src/app/data/products';



@Component({
  selector: 'app-vida-saludable',
  templateUrl: './vida-saludable.component.html',
  styleUrls: ['./vida-saludable.component.scss'],
  providers: [NgbCarouselConfig]
})
export class VidaSaludableComponent implements   OnInit{
  
  listaActividadesEquilibrio:any;
  actividadPrincipal:any;
  listaVidaSaludables:any;
  listaImagenes: any;
  highlighted: boolean = false;
  data: IProduct[] = products.slice(0, 18);

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


      this.vidaSaludableDataService.getItemsActividadesEquilibrio().subscribe(
        data => {
          this.listaActividadesEquilibrio =  data;
      });

      this.vidaSaludableDataService.getItemsActividadPrincilpalEquilibrio().subscribe(
        data => {
          this.actividadPrincipal =  data;
      });
  }

  
}
