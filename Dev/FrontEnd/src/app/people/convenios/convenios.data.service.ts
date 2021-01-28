import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

export interface Convenios {
  id: string;
  name: string;
  
}

@Injectable({ providedIn: 'root' })
export class ConveniosDataService {

  
  private _convenios = [
    {
        id: '0',
        name: 'Selecciona'
      },
    {
      id: '5a15b13c36e7a7f00cf0d7cb',
      name: 'Convenios en reactivación'
    },
    {
      id: '5a15b13c2340978ec3d2c0ea',
      name: 'Cultura, recreación y deporte'
    },
    {
      id: '5a15b13c663ea0af9ad0dae8',
      name: 'Educación'
    },
    {
      id: '5a15b13cc9eeb36511d65acf',
      name: 'Hogar y Tecnología dotaciòn'
    },
    {
      id: '5a15b13cc9eeb36511d61110',
      name: 'Salud, belleza y bienestar'
    },
    {
      id: '5a15b13cc9eeb36511d61111',
      name: 'Turismo'
    },
    {
      id: '5a15b13cc9eeb36511d61112',
      name: 'Vehiculos'
    }
    
  ];

  constructor(private http: HttpClient) { }

  getConvenios(term: string = null): Observable<Convenios[]> {
    let items = this.convenios;
    if (term) {
      items = items.filter(x => x.name.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1);
    }
    return of(items).pipe(delay(500));
  }

  public get convenios() {
    return this._convenios;
  }

}

