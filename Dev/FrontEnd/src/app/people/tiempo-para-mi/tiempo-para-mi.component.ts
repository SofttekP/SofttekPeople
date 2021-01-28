import {Component, OnInit } from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import { TranslateService } from '@ngx-translate/core';
import { ModalGeneralComponent } from './modal-general';
import { TiempoParaMiDataService, TiempoParaMi } from './tiempo-para-mi.data.service';
import { NgbModal, NgbModalOptions, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-tiempo-para-mi',
  templateUrl: './tiempo-para-mi.component.html',
  styleUrls: ['./tiempo-para-mi.component.scss']
})
export class TiempoParaMiComponent implements OnInit {

  modalOptions: NgbModalOptions = {
    backdrop: "static"
  };
  closeResult: string;
  generalPopOver = '¿Sabes cómo solicitarlo?';
  descripcionPopOver = 'Aca te contamos';
  datosTiempoParaMiAsync: any;
  displayMode = 'image';
  activeIndex = 0;
  
  bsModalRef: BsModalRef;
  constructor( private translateService: TranslateService, private tiempoDatService: TiempoParaMiDataService, private modalService: NgbModal) { }
  
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

}
