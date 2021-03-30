import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';


export interface IAdministracionPaises {
    id:number;
    pais: string;
    icon: string;
    estado: boolean;
    banderaImg: string;
    idioma: string;
  }

  @Injectable({ providedIn: 'root' })
  export class AdministracionPaisesDataService {
    private _administracionPaises = [
        {
            id: 1,
            pais: 'Colombia', 
            icon: 'simple-icon-pencil', 
            estado :true, 
            idioma :'Español',
            banderaImg:'/assets/img/flags/us.png', 
        },
        {
            id: 2,
            pais: 'Argentina', 
            icon: 'simple-icon-pencil', 
            estado :false, 
            idioma :'Español',
            banderaImg:'/assets/img/flags/es.png', 
        },
        {
            id: 3,
            pais: 'Brasil', 
            icon: 'simple-icon-pencil', 
            estado :true, 
            idioma :'Portugues',
            banderaImg:'/assets/img/flags/br.png', 
        }
      ];

    constructor(private http: HttpClient) { }

      getDatosAdministracionPaises(term: string = null): Observable<IAdministracionPaises[]> {
        let items = this.obtenerDatosAdministracionPaises;
        if (term) {
          items = items.filter(x => x.pais.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1);
        }
        return of(items).pipe(delay(500));
      }
    
      public get obtenerDatosAdministracionPaises() {
        return this._administracionPaises;
    }


  }
