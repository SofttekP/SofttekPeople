import { Component, OnInit } from '@angular/core';
import { ReconocimientosDataService  } from './reconocimientos-data.service';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import {BsModalRef} from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-reconocimientos',
  templateUrl: './reconocimientos.component.html',
  styleUrls: ['./reconocimientos.component.scss']
})
export class ReconocimientosComponent implements OnInit {

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
  urlInfo="app/infoReco";


  constructor( private modalService: NgbModal, 
    private reconocimientoService: ReconocimientosDataService,
    private router: Router) { }

  
  ngOnInit(): void {
    
  }
  

}
