import { Component, OnInit } from '@angular/core';
import { NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-administracion-reconocimientos',
  templateUrl: './administracion-reconocimientos.component.html',
  styleUrls: ['./administracion-reconocimientos.component.scss']
})
export class AdministracionReconocimientosComponent implements OnInit {

  adminRoot = environment.adminRoot;
  modalOptions: NgbModalOptions = {
    backdrop: "static"
  };
  closeResult: string;
 
  datosReconocimientoAsync: any;
  displayMode = 'image';
  activeIndex = 0;
  bsModalRef: BsModalRef;


  verCarrusel = "iconsminds-medal";
  verInformacion = "iconsminds-crown-2";
  descripcionPopOver="acá encuentras información  y las insignias actuales";
  generalPopOver="Insignias";
  descripcionIPopOver="acá encuentras información  y los reconocimientos actuales";
  generalIPopOver="Reconocimientos";
  urlCarrusel:"app/infoInsignias";
  urlInfo="app/adminContentRec";



  constructor() { }

  ngOnInit(): void {
  }

}
