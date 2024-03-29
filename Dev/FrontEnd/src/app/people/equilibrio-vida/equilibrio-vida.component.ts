import {  Component, OnInit, AfterViewChecked, ViewChild } from '@angular/core';
import { vidaSaludableDataService } from './equilibrio-vida.data.service';
import { NgbCarouselConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HighlightService } from '../../shared/highlight.service';
import { IProduct } from 'src/app/data/api.service';
import products from 'src/app/data/products';



@Component({
  selector: 'app-equilibrio-vida',
  templateUrl: './equilibrio-vida.component.html',
  styleUrls: ['./equilibrio-vida.component.scss'],
  providers: [NgbCarouselConfig]
})
export class VidaSaludableComponent implements   OnInit{
  @ViewChild('modalEncuesta', {static: false}) modalX: any;
  listaActividadesEquilibrio:any;
  actividadPrincipal:any;
  listaVidaSaludables:any;
  listaImagenes: any;
  highlighted: boolean = false;
  data: IProduct[] = products.slice(0, 18);

  constructor(private vidaSaludableDataService: vidaSaludableDataService, config: NgbCarouselConfig, private highlightService: HighlightService, private modalService: NgbModal) {
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = true;
    config.showNavigationArrows = true;
  }
  
  ngOnDestroy(): void {
    this.openEncuesta(this.modalX);
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
  openEncuesta(modal) {
    this.modalService.open(modal, { size: 'md', centered: true, backdrop: 'static',
    keyboard: false });
  }
  
}
