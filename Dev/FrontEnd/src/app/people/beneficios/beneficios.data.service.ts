import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

export interface Beneficios {
  id: string;
  name: string;
  img: string;
}

@Injectable({ providedIn: 'root' })
export class BeneficiosDataService {

  
  private _beneficios = [
    {
        id: '0',
        name: 'Selecciona',
        img: ''
      },
    {
      id: '5a15b13c36e7a7f00cf0d7cb',
      name: 'Salud',
      img: '/assets/img/beneficios/salud.jpg'
    },
    {
      id: '5a15b13c2340978ec3d2c0ea',
      name: 'Vivienda',
      img: '/assets/img/beneficios/vivienda.jpg'
    },
    {
      id: '5a15b13c663ea0af9ad0dae8',
      name: 'Educación',
      img: '/assets/img/beneficios/educacion.png'
    },
    {
      id: '5a15b13cc9eeb36511d65acf',
      name: 'Bono dotación',
      img: '/assets/img/beneficios/dotacion.jpg'
    }
    
  ];

  constructor(private http: HttpClient) { }

  getBeneficios(term: string = null): Observable<Beneficios[]> {
    let items = this.beneficios;
    if (term) {
      items = items.filter(x => x.name.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1);
    }
    return of(items).pipe(delay(500));
  }

  public get beneficios() {
    return this._beneficios;
  }

}

