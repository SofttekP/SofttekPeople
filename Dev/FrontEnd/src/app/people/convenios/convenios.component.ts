import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convenios',
  templateUrl: './convenios.component.html',
  styleUrls: ['./convenios.component.scss']
})
export class ConveniosComponent implements OnInit {

  constructor() { }
  listaConvenios: Array<any> = ['Convenios en reactivación', 'Cultura, recreación y deporte', 'Educación', 'Hogar y Tecnología', 'Salud, belleza y bienestar', 'Turismo', 'Vehiculos'];
  infoConvenios = true;
  imgConvReactivacion = '/assets/img/convenios/convenioReactivacion.jpg';
  ngOnInit(): void {

  }
  // tslint:disable-next-line:typedef
  visualizarInfoConvenio(value){
    // tslint:disable-next-line:triple-equals
    if (value == 1){
      this.infoConvenios = false;
    }
  }
}
