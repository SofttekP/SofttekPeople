import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administracion-equilibrio-de-vida',
  templateUrl: './administracion-equilibrio-de-vida.component.html',
  styleUrls: ['./administracion-equilibrio-de-vida.component.scss']
})
export class AdministracionEquilibrioDeVidaComponent implements OnInit {

  verCarrusel = "iconsminds-photo";
  verInformacion = "iconsminds-information";
  descripcionPopOver="acá puedes actualizar y agregar contenido al carrusel ubicado en el modulo equilibrio de vida";
  generalPopOver="Administrar Carrusel";
  descripcionIPopOver="acá puedes actualizar y agregar contenido en la información extra del modulo equilibrio de vida";
  generalIPopOver="Información extra";
  urlCarrusel:"app/adminCarrusel";
  urlInfo="app/adminInfo";




  constructor() { }

  ngOnInit(): void {
  }

}
