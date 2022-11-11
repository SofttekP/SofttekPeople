import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { ModalDismissReasons, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { adminCarrusellDataService} from "./administrar-carrusel-equilibrio-vida.data.service";
import { CrearCarrusel } from "../../models/crearCarrusel"

@Component({
  selector: 'app-administrar-carrusel-equilibrio-vida',
  templateUrl: './administrar-carrusel-equilibrio-vida.component.html',
  styleUrls: ['./administrar-carrusel-equilibrio-vida.component.scss']
})
export class AdministrarCarruselEquilibrioVidaComponent implements OnInit {

  modalOptions: NgbModalOptions = {
    backdrop: "static"
  };
  closeResult: string;
  generalPopOver = 'Ayuda';
  descripcionPopOver = 'Las imagenes deben tener una medida en pixeles de 400x407, se adminte formatos .jpg';
  buttonDisabled = true;
  iconoAyuda: string = "simple-icon-question";
  iconoAgregar: string = "simple-icon-plus";
  nuevaImagen: File;
  datosAdministracionCarruselAsync: any;
  agregarCarrusel= new CrearCarrusel();
  ActualizarCarrusel= new CrearCarrusel();

  constructor(private modalService: NgbModal,private lightbox: Lightbox, private adminCarrusellDataService: adminCarrusellDataService) { }

  ngOnInit(): void {
    this.adminCarrusellDataService.getItemsVidaSaludable().subscribe(
      data => {
        this.datosAdministracionCarruselAsync = data;
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

  abrirUpdate(contentModal,id) {
    this.ActualizarCarrusel = this.datosAdministracionCarruselAsync.find(()=>id);
    this.abierto(contentModal);
  }
}
