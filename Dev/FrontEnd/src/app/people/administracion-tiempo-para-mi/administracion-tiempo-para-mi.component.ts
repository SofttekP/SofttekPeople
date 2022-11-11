import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { TiempoParaMiDataService } from "../tiempo-para-mi/tiempo-para-mi.data.service";
import { Lightbox } from 'ngx-lightbox';
import { CrearContenidoTimepo } from "../../models/crearContenidoTimepoParaMi";

@Component({
  selector: 'app-administracion-tiempo-para-mi',
  templateUrl: './administracion-tiempo-para-mi.component.html',
  styleUrls: ['./administracion-tiempo-para-mi.component.scss']
})
export class AdministracionTiempoParaMiComponent implements OnInit {
  modalOptions: NgbModalOptions = {
    backdrop: "static"
  };
  closeResult: string;
  generalPopOver = 'Ayuda';
  descripcionPopOver = 'Las imagenes deben tener una medida en pixeles de 400x407, se adminte formatos .jpg';
  buttonDisabled = true;
  datosAdministracionTiempoAsync: any;
  agregarTiempo = new CrearContenidoTimepo();
  iconoAyuda: string = "simple-icon-question";
  iconoAgregar: string = "simple-icon-plus";
  subCategoria = true;
  tituloCategoria = true;
  descripcion = true;
  link = true;
  img = true;
  actualizarContenidoTiempo = new CrearContenidoTimepo();
  nuevaImagen: File;

  constructor(private modalService: NgbModal, private TiempoParaMiDataService: TiempoParaMiDataService,private lightbox: Lightbox) { }

  ngOnInit(): void {
    this.TiempoParaMiDataService.getDatosTiempoParaMi().subscribe(
      data => {
        this.datosAdministracionTiempoAsync = data;
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

  openLightbox(src: string): void {
    this.lightbox.open([{ src, thumb: '' }], 0, { centerVertically: true, positionFromTop: 0, disableScrolling: true, wrapAround: true });
  }


  boolTituloCategoria = false;
  validarCreacionTituloCategoria(){
    if(this.agregarTiempo.tituloCategoria == '' || this.agregarTiempo.tituloCategoria == undefined){
      this.tituloCategoria = false;
      this.boolTituloCategoria = false;
    }else{
      this.tituloCategoria = true;
      this.boolTituloCategoria = true;
    }
  }

boolSubCategoria = false;
validarCreacionSubCategoria(){
  if(this.agregarTiempo.subCategoria == '' || this.agregarTiempo.subCategoria == undefined){
    this.subCategoria = false;
    this.boolSubCategoria = false;
  }else{
    this.subCategoria = true;
    this.boolSubCategoria = true;
  }
}

boolDescripcion = false;
validarCreacionDescripcion(){
  if(this.agregarTiempo.descripcion == '' || this.agregarTiempo.descripcion == undefined){
    this.descripcion = false;
    this.boolDescripcion = false;
  }else{
  this.descripcion = true;
  this.boolDescripcion = true;
  
  }
}

boolLink = false;
validarCreacionLink(){
  if(this.agregarTiempo.link == '' || this.agregarTiempo.link == undefined){
    this.link = false;
    this.boolLink = false;
  }else{
  this.link = true;
  this.boolLink = true;
  }
}

boolImg = false;
validarCreacionImg(){
  if(this.agregarTiempo.img == '' || this.agregarTiempo.img == undefined){
    this.img = false;
    this.boolImg = false;
  }else{
  this.img = true;
  this.boolImg = true;
  
  }
}
validarCreacion(){
  if(this.boolTituloCategoria == true && this.boolSubCategoria == true && this.boolDescripcion == true && this.boolLink == true && this.boolImg == true){
    this.buttonDisabled = false;
  }else{
    this.buttonDisabled = true;
  }
}

abrirUpdate(contentModal,id) {
  this.actualizarContenidoTiempo = this.datosAdministracionTiempoAsync.find(()=>id);
  this.abierto(contentModal);
}

validarActualizacionSubCategoria(){
  if(this.actualizarContenidoTiempo.subCategoria == '' || this.actualizarContenidoTiempo.subCategoria == undefined){
    this.subCategoria = false;
      this.boolTituloCategoria = false;
    }else{
      this.subCategoria = true;
      this.boolTituloCategoria = true;
  }
}

validarActualizacionTituloCategoria(){
  if(this.actualizarContenidoTiempo.tituloCategoria != '' || this.actualizarContenidoTiempo.tituloCategoria != undefined){
    this.tituloCategoria = false;
      this.boolTituloCategoria = false;
    }else{
      this.tituloCategoria = true;
      this.boolTituloCategoria = true;
    }
}

validarActualizacionDescripcion(){
  if(this.actualizarContenidoTiempo.descripcion != ''  || this.actualizarContenidoTiempo.descripcion !=  null){
    this.descripcion = false;
    this.boolDescripcion = false;
  }else{
  this.descripcion = true;
  this.boolDescripcion = true;
  }
}

validarActualizacionLink(){
  if(this.actualizarContenidoTiempo.link != undefined  || this.actualizarContenidoTiempo.link !=  ''){
    this.link = false;
    this.boolLink = false;
  }else{
  this.link = true;
  this.boolLink = true;
  }
}

validarActualizacionImg(){
  if(this.nuevaImagen != undefined  || this.nuevaImagen !=  null){
    this.img = false;
    this.boolImg = false;
  }else{
  this.img = true;
  this.boolImg = true;
  }
}

validarActualizacion(){
  if(this.boolTituloCategoria == true && this.boolSubCategoria == true && this.boolDescripcion == true && this.boolLink == true && this.boolImg == true){
    this.buttonDisabled = false;
  }else{
    this.buttonDisabled = true;
  }
}

cancelar(){
  this.boolTituloCategoria = true;
  this.boolSubCategoria = true;
  this.boolDescripcion = true;
  this.boolLink = true;
  this.boolImg = true;
  this.nuevaImagen = undefined;
  this.actualizarContenidoTiempo = null;
  this.agregarTiempo = new CrearContenidoTimepo();
}


}
