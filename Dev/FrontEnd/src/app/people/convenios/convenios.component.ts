import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConveniosDataService, Convenios } from './convenios.data.service';

@Component({
  selector: 'app-convenios',
  templateUrl: './convenios.component.html',
  styleUrls: ['./convenios.component.scss']
})
export class ConveniosComponent implements OnInit {

  constructor(private conveniosDataService: ConveniosDataService) { }
  verContenido: boolean = false;
  urlImage: string = "src/assets/img/details/5.jpg";
  tituloConvenio: string = "";
  conveniosAsync: Observable<Convenios[]>;
  selectedConveniodAsync = '0';
  


  ngOnInit(): void {
    this.conveniosAsync = this.conveniosDataService.getConvenios();
  }
  
  seleccionConvenio(){
      this.verContenido = true;
    
  }
}
