import { Component, OnInit } from '@angular/core';
import { InsigniasDataService } from './insignias-data.service';
import { Lightbox } from 'ngx-lightbox';


@Component({
  selector: 'app-insignias',
  templateUrl: './insignias.component.html',
  styleUrls: ['./insignias.component.scss']
})
export class InsigniasComponent implements OnInit {

  constructor(private insigniasDataService: InsigniasDataService,private lightbox: Lightbox) { }

  verComo = "simple-icon-info";
  verOtorgar  = "simple-icon-question";
  verInformacion = "simple-icon-question";
  descripcionPopOver="Un reconocimiento que le das a otro softtekian por sus acciones destacadas";
  generalPopOver="¿Qué es una insignia? ";
  descripcionIPopOver="De Softtekian a Softtekian";
  generalIPopOver="¿A quién le puedes otorgar una insignia?";
  descripcionCPopOver="Da clic en el video para conocer toda la información";
  generalCPopOver="¿Cómo otorgar una insignia?";

  datosinsigniasAsync : any;
  page =1;


  ngOnInit(): void {
    this.insigniasDataService.getDatosInsignias().subscribe(
      data => {
        this.datosinsigniasAsync = data;
      });
  }

  openLightbox(src: string): void {
    this.lightbox.open([{ src, thumb: '' }], 0, { centerVertically: true, positionFromTop: 0, disableScrolling: true, wrapAround: true });
  }

}
