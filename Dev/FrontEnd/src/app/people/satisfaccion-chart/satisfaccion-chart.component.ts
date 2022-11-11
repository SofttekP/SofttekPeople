import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-satisfaccion-chart',
  templateUrl: './satisfaccion-chart.component.html',
  styleUrls: ['./satisfaccion-chart.component.scss']
})
export class SatisfaccionChartComponent implements OnInit {

  chartData = [
    {
      data: [22, 15, 1, 50,5,0],
      label: 'Unlike'
    },
    {
      data: [50, 30, 60, 1,45,50],
      label: 'Like'
    }
  ];

  chartLabels = [
    'Tiempo para mí',
    'Convenios',
    'Equilibrio de vida',
    'Beneficios',
    'Reconocimientos',
    'Eventos'
  ];

  chartOptions = {
    responsive: true
  };

  constructor() {
    
   }

  ngOnInit(): void {
  }
  
  
  
}
