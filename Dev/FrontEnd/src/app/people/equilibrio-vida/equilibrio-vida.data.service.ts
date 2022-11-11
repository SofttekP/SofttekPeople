import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

export interface VidaSaludable {
  id: string;
  name: string;
  img: string;
  link: string;  
}


export interface IactividadesEquilibrio {
  id: number;
  title: string;
  img: string;
  category: string; 
  date:string;
  status:string;
  statusColor:string;
  description:string;
}

export interface IactividadPrincipalEquilibrio {
  id: number;
  title: string;
  img: string;
  category: string; 
  date:string;
  status:string;
  statusColor:string;
  description:string;
}

@Injectable({ providedIn: 'root' })
export class vidaSaludableDataService {

  
  private _vidaSaludable = [
    
    {
      id: '5a15b13c36e7a7f00cf0d7cb',
      name: 'Salud',
      img: '/assets/img/carousels/1.jpg',
      link :''
    },
    {
      id: '5a15b13c2340978ec3d2c0ea',
      name: 'Vivienda',
      img: '/assets/img/carousels/2.jpg',
      link :''
    },
    {
      id: '5a15b13c663ea0af9ad0dae8',
      name: 'Educación',
      img: '/assets/img/carousels/3.jpg',
      link :''
    },
    {
      id: '5a15b13cc9eeb36511d65acf',
      name: 'Bono dotación',
      img: '/assets/img/carousels/4.jpg',
      link :''
    }
    
  ];
  private _actividadesEquilibrio = [
    {
      id: 2,
      title: 'Programa Fitme',
      img: '/assets/img/products/marble-cake-thumb.jpg',
      category: 'Deporte',
      date: '16.02.2021',
      status: 'TERMINADA',
      statusColor: 'danger',
      description: 'Acá va la descripción de la actividad'
    },
    {
      id: 3,
      title: 'Semana Saludable',
      img: '/assets/img/products/marble-cake-thumb.jpg',
      category: 'Salud',
      date: '01.03.2021',
      status: 'PRÓXIMAMENTE',
      statusColor: 'warning',
      description: 'Conoce las actividades del dia de la salud'
    },
    {
      id: 4,
      title: 'Tips de Salud',
      img: '/assets/img/products/marble-cake-thumb.jpg',
      category: 'Salud',
      date: '02.04.2018',
      status: 'ACTUAL',
      statusColor: 'primary',
      description: 'Acá va la descripción de la actividad'
    },
    {
      id: 5,
      title: 'WELLNESS CENTER',
      img: '/assets/img/products/marble-cake-thumb.jpg',
      category: 'Salud',
      date: '02.04.2018',
      status: 'ACTUAL',
      statusColor: 'primary',
      description: 'Acá va la descripción de la actividad'
    }
    
  ];

  private _actividadPrincipalEquilibrio = [
    
    {
      id: 1,
      title: 'Pausas Activas',
      img: '/assets/img/profiles/1.jpg',
      category: 'Deporte',
      date: '17.02.2021',
      status: 'ACTUAL',
      statusColor: 'primary',
      description: 'Programa de Pausas Activas SOS ENERGY  I’m a web developer. I spend my whole day, practically every day,      experimenting with HTML, CSS, and JavaScript; dabbling with Python and  Ruby; and inhaling a wide variety of potentially useless information   through a few hundred RSS feeds. I build websites that delight and    inform. I do it well.Programa de Pausas Activas SOS ENERGY  I’m a web developer. I spend my whole day, practically every day,      experimenting with HTML, CSS, and JavaScript; dabbling with Python and  Ruby; and inhaling a wide variety of potentially useless information   through a few hundred RSS feeds. I build websites that delight and    inform. I do it well.'
      
    }
    
  ];

  constructor(private http: HttpClient) { }

  getItemsVidaSaludable(term: string = null): Observable<VidaSaludable[]> {
    let items = this.itemsVidaSaludable;
    if (term) {
      items = items.filter(x => x.name.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1);
    }
    return of(items).pipe(delay(500));
  }

  public get itemsVidaSaludable() {
    return this._vidaSaludable;
  }


  getItemsActividadesEquilibrio(term: string = null): Observable<IactividadesEquilibrio[]> {
    let items = this.itemsActividadesEquilibrio;
    if (term) {
      items = items.filter(x => x.title.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1);
    }
    return of(items).pipe(delay(500));
  }

  public get itemsActividadesEquilibrio() {
    return this._actividadesEquilibrio;
  }

  getItemsActividadPrincilpalEquilibrio(term: string = null): Observable<IactividadPrincipalEquilibrio[]> {
    let items = this.actividadPrincipalEquilibrio;
    if (term) {
      items = items.filter(x => x.title.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1);
    }
    return of(items).pipe(delay(500));
  }

  public get actividadPrincipalEquilibrio() {
    return this._actividadPrincipalEquilibrio;
  }

}

