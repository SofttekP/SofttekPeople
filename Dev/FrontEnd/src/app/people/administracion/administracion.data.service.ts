import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

export interface IAdministracion {
  title: string;
  icon: string;
  generalPopOver: string;
  descripcionPopOver: string;
  url: string;
}

@Injectable({ providedIn: 'root' })
export class AdministracionDataService {

  
  private _administracion = [
    {
      title: 'Roles', 
      icon: 'iconsminds-male-female', 
      generalPopOver :'Administrar Usuarios', 
      descripcionPopOver:'Acá puesdes gestionar los usuarios con rol administrador', 
      url:'app/adminRol'
      },
    {
      title: 'Paises', 
      icon: 'iconsminds-map-marker-2', 
      generalPopOver :'Administrar Paises', 
      descripcionPopOver:'Acá puesdes gestionar los paises', 
      url:'app/adminPaises'
    },
    {
      title: 'Tiempo para mi ', 
      icon: 'iconsminds-sand-watch-2', 
      generalPopOver :'Administrar Contenido', 
      descripcionPopOver:'Acá puesdes gestionar (imagenes, texto y links)', 
      url:'app/adminTiempo'
    },
    {
      title: 'Convenios', 
      icon: 'iconsminds-handshake', 
      generalPopOver :'Administrar Contenido', 
      descripcionPopOver:'Acá puesdes gestionar (imagenes, texto y links)', 
      url:'app/adminConvenios'
    },
    {
      title: 'Equilibrio de vida', 
      icon: 'iconsminds-scale', 
      generalPopOver :'Administrar Contenido', 
      descripcionPopOver:'Acá puesdes gestionar (imagenes, texto y links)', 
      url:'app/adminEquilibrio'
    },
    {
      title: 'Beneficios', 
      icon: 'iconsminds-friendster', 
      generalPopOver :'Administrar Contenido', 
      descripcionPopOver:'Acá puesdes gestionar (imagenes, texto y links)', 
      url:'app/adminBeneficios'
    },
    {
      title: 'Reconocimientos', 
      icon: 'iconsminds-crown-2', 
      generalPopOver :'Administrar Contenido', 
      descripcionPopOver:'Acá puesdes gestionar (imagenes, texto, links e historial de reconocimiento)',
      url:'app/adminRecomocimientos'
    },
    {
      title: 'Eventos', 
      icon: 'iconsminds-calendar-4', 
      generalPopOver :'Administrar Contenido', 
      descripcionPopOver:'Acá puesdes gestionar fechas y horas de los eventos', 
      url:'app/adminEventos'
    },
    {
      title: 'Satisfacíon', 
      icon: 'iconsminds-line-chart-1', 
      generalPopOver :'Estadisticas Satisfación', 
      descripcionPopOver:'Acá puedes visualizar estadisticamente los resultados de encuestas', 
      url:'app/satisfaccion'
    }
  ];

  constructor(private http: HttpClient) { }

  getDatosAdministracion(term: string = null): Observable<IAdministracion[]> {
    let items = this.obtenerDatosAdministracion;
    if (term) {
      items = items.filter(x => x.title.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1);
    }
    return of(items).pipe(delay(500));
  }

  public get obtenerDatosAdministracion() {
    return this._administracion;
  }

}

