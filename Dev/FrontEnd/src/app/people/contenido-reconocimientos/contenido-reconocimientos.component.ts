import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContenidoReconocimientosDataService  } from './contenido-reconocimientos-data.service';

@Component({
  selector: 'app-contenido-reconocimientos',
  templateUrl: './contenido-reconocimientos.component.html',
  styleUrls: ['./contenido-reconocimientos.component.scss']
})
export class ContenidoReconocimientosComponent implements OnInit {

  constructor(private contenidoReconocimientoService: ContenidoReconocimientosDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.route.queryParams.pipe(params => params).subscribe(params => {
      this.reconocimiento = params.id;
    }
  );
      
  
  }
  reconocimiento:any;
  datosContenidoReconocimientoidAsync: any;
  datosColaborador: any;
  
  
  ngOnInit(): void {
    this.contenidoReconocimientoService.getDatoscontenidoReconocimiento(this.reconocimiento).subscribe(
      data => {
        this.datosContenidoReconocimientoidAsync = data;
      });

      this.contenidoReconocimientoService.getDatoscontenidoReconocimientoColaborador(this.reconocimiento).subscribe(
        data => {
          debugger;
          this.datosColaborador = data;
        }); 
  }
  
}
