import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-satisfaccion',
  templateUrl: './satisfaccion.component.html',
  styleUrls: ['./satisfaccion.component.scss']
})
export class SatisfaccionComponent implements OnInit {

  verChart = "iconsminds-bar-chart-4";
  verComment = "simple-icon-bubbles";
  descripcionPopOver="acá encuentras los graficos de satisfacción sobre la aplicación";
  generalPopOver="Graficos Estadisticas";
  descripcionIPopOver="acá encuentras los comentarios o sugerencias realizadas por los colaboradores";
  generalIPopOver="Comentarios";
  urlCarrusel:"app/chart";
  urlInfo="app/comment";


  constructor() { }

  ngOnInit(): void {
  }

}
