import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { BeneficiosDataService, Beneficios } from './beneficios.data.service';

@Component({
  selector: 'app-beneficios',
  templateUrl: './beneficios.component.html',
  styleUrls: ['./beneficios.component.scss']
})
export class BeneficiosComponent implements OnInit {

  constructor(private beneficiosDataService: BeneficiosDataService) { }
  verContenido: boolean = false;
  urlImage: string = "";
  tituloBeneficio: string = "";
  beneficiosAsync: Observable<Beneficios[]>;
  selectedBeneficiosIdAsync = '0';
  


  ngOnInit(): void {
    this.beneficiosAsync = this.beneficiosDataService.getBeneficios();
  }
  
  seleccionBeneficio(){
    
      this.verContenido = true;
    
  }

}
