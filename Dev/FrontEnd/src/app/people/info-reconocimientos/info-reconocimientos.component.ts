import { Component, OnInit } from '@angular/core';
import { InfoReconocimientosDataService } from './info-reconocimientos-data.service';
import { Lightbox } from 'ngx-lightbox';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-info-reconocimientos',
  templateUrl: './info-reconocimientos.component.html',
  styleUrls: ['./info-reconocimientos.component.scss']
})
export class InfoReconocimientosComponent implements OnInit {

  constructor(private infoReconocimientosDataService: InfoReconocimientosDataService,
    private lightbox: Lightbox,
    private router: Router) { }
  
  adminRoot = environment.adminRoot;
  
  datosInfoReconocimientosAsync : any;
  page =1;
  generalPopOver = '¿Quires saber más?';
  descripcionPopOver = 'Acá te contamos';
  displayMode = 'image';
  ngOnInit(): void {
    
    this.infoReconocimientosDataService.getDatosInfoReconocimientos().subscribe(
      data => {
        this.datosInfoReconocimientosAsync = data;
      });
  }

  openLightbox(src: string): void {
    this.lightbox.open([{ src, thumb: '' }], 0, { centerVertically: true, positionFromTop: 0, disableScrolling: true, wrapAround: true });
  }

}
