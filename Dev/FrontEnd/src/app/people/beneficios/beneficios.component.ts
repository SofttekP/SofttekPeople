import { Component, OnInit } from '@angular/core';
import { Observable, } from 'rxjs';
import { delay, filter } from 'rxjs/operators';
import { BeneficiosDataService, Beneficios } from './beneficios.data.service';

@Component({
  selector: 'app-beneficios',
  templateUrl: './beneficios.component.html',
  styleUrls: ['./beneficios.component.scss']
})
export class BeneficiosComponent implements OnInit {

  constructor(private beneficiosDataService: BeneficiosDataService) { }
  verContenido: boolean = false;
  urlImage: string = '';
  tituloBeneficio: string = "";
  beneficiosAsync: any;
  idBeneficio = '0';
 


  ngOnInit(): void {
      this.beneficiosDataService.getBeneficios().subscribe(
        data => {
          this.beneficiosAsync = data;
        });
  }
  
  seleccionBeneficio(){
    debugger;
    if(this.idBeneficio == '0'){
      this.verContenido = false;
      this.tituloBeneficio = '';
      this.urlImage = '';
    }else{
      this.verContenido = true;
      this.tituloBeneficio  = this.beneficiosAsync.find(x=>x.id == this.idBeneficio).name;
      this.urlImage = this.beneficiosAsync.find(x=>x.id == this.idBeneficio).img;
    }
      
    
  }

}
