import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { AdministracionPaisesDataService } from "./administracion.data.service";
import { CrearPais } from '../../models/crearPais';



@Component({
  selector: 'app-administracion-paises',
  templateUrl: './administracion-paises.component.html',
  styleUrls: ['./administracion-paises.component.scss']
})
export class AdministracionPaisesComponent implements OnInit {

  datosAdministracionPaisesAsync: any;
  iconoAgregar: string = "iconsminds-geo2--";
  iconoAyuda: string = "simple-icon-question";
  modalOptions: NgbModalOptions = {
    backdrop: "static"
  };
  closeResult: string;
  generalPopOver = 'Ayuda';
  descripcionPopOver = 'Las imagenes de las banderas deben tener una medida en pixeles de 29x20, se adminte formatos .png';
  buttonDisabled = true;
  nombrePais =true;
  banderaPais =true;
  lenguajePais =true;
  agregarPaises = new  CrearPais();
  actualizarPaises = new CrearPais();
  nuevaBandera: File;

  constructor( private AdministracionPaises: AdministracionPaisesDataService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.AdministracionPaises.getDatosAdministracionPaises().subscribe(
      data => {
        this.datosAdministracionPaisesAsync = data;
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

  AgregarPais(contentModal){
  this.agregarPaises
}

boolPais = false;
validarCreacionPais(){
  if(this.agregarPaises.pais == '' || this.agregarPaises.pais == undefined){
      this.nombrePais = false;
      this.boolPais = false;
  }else{
    this.nombrePais = true;
    this.boolPais = true;
  }
}

boolidioma = false;
validarCreacionIdioma(){
  if(this.agregarPaises.idioma == '' || this.agregarPaises.idioma == undefined){
    this.lenguajePais = false;
    this.boolidioma = false;
  }else{
    this.lenguajePais = true;
    this.boolidioma = true;
  }
}

boolFile = false;
validarCreacionFile(){
  if(this.agregarPaises.banderaImg == '' || this.agregarPaises.banderaImg == undefined){
    this.banderaPais = false;
    this.boolFile = false;
  }else{
  this.banderaPais = true;
  this.boolFile = true;
  
  }
}

validarCreacion(){
  if(this.boolFile == true && this.boolidioma == true && this.boolPais == true){
    this.buttonDisabled = false;
  }else{
    this.buttonDisabled = true;
  }
}

abrirUpdate(contentModal,idPais) {
  this.actualizarPaises = this.datosAdministracionPaisesAsync.find(()=>idPais);
  this.abierto(contentModal);
}


validarActualizacionPais(){
  if(this.actualizarPaises.pais == '' || this.actualizarPaises.pais == undefined){
    this.nombrePais = true;
    this.boolPais = true;
  }else{
    this.nombrePais = false;
    this.boolPais = false;
  }
}

validarActualizacionIdioma(){
  if(this.actualizarPaises.idioma != '' || this.actualizarPaises.idioma != undefined){
    this.lenguajePais = false;
    this.boolidioma = false;
  }else{
    this.lenguajePais = true;
    this.boolidioma = true;
  }
}

validarActualizacionFile(){
  if(this.nuevaBandera != undefined  || this.nuevaBandera !=  null){
    this.banderaPais = false;
    this.boolFile = false;
  }else{
    this.banderaPais = true;
    this.boolFile = true;
  }
}

validarActualizacion(){
  if(this.boolFile == true && this.boolidioma == true && this.boolPais == true){
    this.buttonDisabled = false;
  }else{
    this.buttonDisabled = true;
  }
}

cancelar(){
  this.banderaPais = true;
  this.boolFile = true;
  this.lenguajePais = true;
  this.boolidioma = true;
  this.nombrePais = true;
  this.boolPais = true;
  this.nuevaBandera = undefined;
  this.actualizarPaises = null;
  this.agregarPaises = new  CrearPais();
}


}
