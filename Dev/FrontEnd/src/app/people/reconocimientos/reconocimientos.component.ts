import { Component, OnInit } from '@angular/core';
import { ReconocimientosDataService , IReconocimientos } from './reconocimientos-data.service';
import { NgbModal, NgbModalOptions, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-reconocimientos',
  templateUrl: './reconocimientos.component.html',
  styleUrls: ['./reconocimientos.component.scss']
})
export class ReconocimientosComponent implements OnInit {

  modalOptions: NgbModalOptions = {
    backdrop: "static"
  };
  closeResult: string;
  generalPopOver = '¿Quires saber más?';
  descripcionPopOver = 'Acá te contamos';
  datosReconocimientoAsync: any;
  displayMode = 'image';
  activeIndex = 0;
  bsModalRef: BsModalRef;

  constructor( private modalService: NgbModal, private reconocimientoService: ReconocimientosDataService) { }

  ngOnInit(): void {
    this.reconocimientoService.getDatosReconocimientos().subscribe(
      data => {
        this.datosReconocimientoAsync = data;
      });
  }

  abierto(content) {

    this.modalService.open(content, this.modalOptions).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
    } else {
        return `with: ${reason}`;
    }
  }

  abrirModal(contentModal) {
    this.abierto(contentModal);
  }
}
