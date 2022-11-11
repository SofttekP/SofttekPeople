import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, } from 'rxjs';
import { delay, filter } from 'rxjs/operators';
import { BeneficiosDataService, Beneficios } from './beneficios.data.service';

@Component({
  selector: 'app-beneficios',
  templateUrl: './beneficios.component.html',
  styleUrls: ['./beneficios.component.scss']
})
export class BeneficiosComponent implements OnInit {
  @ViewChild('modalEncuesta', {static: false}) modalX: any;
  
  constructor(private beneficiosDataService: BeneficiosDataService, private modalService: NgbModal) { }
  verContenido: boolean = false;
  urlImage: string = '';
  tituloBeneficio: string = "";
  beneficiosAsync: any;
  idBeneficio = '0';
 
  ngOnDestroy(): void {
    this.openEncuesta(this.modalX);
  }


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

  openEncuesta(modal) {
    this.modalService.open(modal, { size: 'md', centered: true, backdrop: 'static',
    keyboard: false });
  }

}
