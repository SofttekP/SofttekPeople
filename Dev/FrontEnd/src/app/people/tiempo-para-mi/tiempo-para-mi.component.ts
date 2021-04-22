import {Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import { TranslateService } from '@ngx-translate/core';
import { ModalGeneralComponent } from './modal-general';
import { TiempoParaMiDataService, TiempoParaMi } from './tiempo-para-mi.data.service';
import { NgbModal, NgbModalOptions, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import products from 'src/app/data/products';
import { IProduct } from 'src/app/data/api.service';

@Component({
  selector: 'app-tiempo-para-mi',
  templateUrl: './tiempo-para-mi.component.html',
  styleUrls: ['./tiempo-para-mi.component.scss']
})
export class TiempoParaMiComponent implements OnInit, OnDestroy {
  @ViewChild('modalEncuesta', {static: false}) modalX: any;
  
  modalOptions: NgbModalOptions = {
    backdrop: "static"
  };
  closeResult: string;
  generalPopOver = '¿Sabes cómo solicitarlo?';
  descripcionPopOver = 'Acá te contamos';
  datosTiempoParaMiAsync: any;
  displayMode = 'image';
  activeIndex = 0;
  bsModalRef: BsModalRef;
  
  constructor( private translateService: TranslateService, private tiempoDatService: TiempoParaMiDataService, private modalService: NgbModal) { }
  
  ngOnDestroy(): void {
    this.openEncuesta(this.modalX);
  }


  data: IProduct[] = products.slice(0, 18);
  ngOnInit(): void {

  this.tiempoDatService.getDatosTiempoParaMi().subscribe(
    data => {
      this.datosTiempoParaMiAsync = data;
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
    if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
    } else {
        return `with: ${reason}`;
    }
  }

  abrirModal(contentModal) {
    this.abierto(contentModal);
}


openEncuesta(modal) {
  this.modalService.open(modal, { size: 'md', centered: true, backdrop: 'static',
  keyboard: false });
}

}
