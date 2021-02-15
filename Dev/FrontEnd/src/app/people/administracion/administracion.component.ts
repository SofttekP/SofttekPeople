import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import { IAdministracion , AdministracionDataService } from './administracion.data.service';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.scss']
})
export class AdministracionComponent implements OnInit {
  modalOptions: NgbModalOptions = {
    backdrop: "static"
  };
  closeResult: string;
  generalPopOver = '¿Quires saber más?';
  descripcionPopOver = 'Acá te contamos';
  datosAdministracionAsync: any;
  displayMode = 'image';
  activeIndex = 0;
  bsModalRef: BsModalRef;

  constructor(private modalService: NgbModal, private administracionService: AdministracionDataService) { }

  ngOnInit(): void {
    this.administracionService.getDatosAdministracion().subscribe(
      data => {
        this.datosAdministracionAsync = data;
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
