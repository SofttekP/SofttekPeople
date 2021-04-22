import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ConveniosDataService } from '../convenios/convenios.data.service';
import { CrearConvenios } from '../../models/crearConvenios';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-administracion-convenios',
  templateUrl: './administracion-convenios.component.html',
  styleUrls: ['./administracion-convenios.component.scss']
})
export class AdministracionConveniosComponent implements OnInit {

  modalOptions: NgbModalOptions = {
    backdrop: "static"
  };
  page =1;
  closeResult: string;
  generalPopOver = 'Ayuda';
  descripcionPopOver = 'Las imagenes deben tener una medida en pixeles entre 180x180 y 380x380, se adminte formatos .jpg';
  buttonDisabled = true;
  iconoAyuda: string = "simple-icon-question";
  iconoAgregar: string = "simple-icon-plus";
  nuevaImagen: File;
  datosAdministracionConveniosAsync: any;
  agregarConevnio = new CrearConvenios();
  boolTitulo: true;
  boolDescripcion: true;
  boolCategoria : true;
  boolImg: true;

  constructor(private modalService: NgbModal, private ConveniosDataService: ConveniosDataService,private lightbox: Lightbox) { }

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

  ngOnInit(): void {
    this.ConveniosDataService.getConvenios().subscribe(
      data => {
        this.datosAdministracionConveniosAsync = data;
      });
  }
  openLightbox(src: string): void {
    this.lightbox.open([{ src, thumb: '' }], 0, { centerVertically: true, positionFromTop: 0, disableScrolling: true, wrapAround: true });
  }

  validarCreacion(){
    if(this.boolTitulo == true && this.boolDescripcion == true && this.boolCategoria == true && this.boolImg == true){
      this.buttonDisabled = false;
    }else{
      this.buttonDisabled = true;
    }
  }

  validarCreacionTitulo(){

  }

  validarCreacionDescripcion(){

  }

  validarCreacionCategoria(){

  }

  validarCreacionImg(){

  }

  AgregarConvenio(){
    
  }

}
