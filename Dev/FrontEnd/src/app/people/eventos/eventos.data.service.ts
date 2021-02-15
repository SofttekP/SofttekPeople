import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

export interface IEventos {
    id: string;
    name: string;
    img: string;
    link: string;  
  }

  @Injectable({ providedIn: 'root' })
export class eventosDataService {

    private _dataEventos = [
    
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
          name: 'Educaciòn',
          img: '/assets/img/carousels/3.jpg',
          link :''
        },
        {
          id: '5a15b13cc9eeb36511d65acf',
          name: 'Bono dotaciòn',
          img: '/assets/img/carousels/4.jpg',
          link :''
        }
        
      ];


      constructor(private http: HttpClient) { }

      getItemsEventos(term: string = null): Observable<IEventos[]> {
        let items = this.itemsEventos;
        if (term) {
          items = items.filter(x => x.name.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1);
        }
        return of(items).pipe(delay(500));
      }
    
      public get itemsEventos() {
        return this._dataEventos;
      }


}
