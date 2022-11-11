import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

export interface AdminCarrusel {
  id: string;
  name: string;
  img: string;
  link: string;  
  estado: boolean;
  icon: string;
}




@Injectable({ providedIn: 'root' })
export class adminCarrusellDataService {
  
  private _adminCarrusell = [
    
    {
      id: '1',
      name: 'Salud',
      img: '/assets/img/carousels/1.jpg',
      link :'',
      estado: false,
      icon: 'simple-icon-pencil'
    },
    {
      id: '2',
      name: 'Vivienda',
      img: '/assets/img/carousels/2.jpg',
      link :'',
      estado: true,
      icon: 'simple-icon-pencil'
    },
    {
      id: '3',
      name: 'Educación',
      img: '/assets/img/carousels/3.jpg',
      link :'',
      estado: true,
      icon: 'simple-icon-pencil'
    },
    {
      id: '4',
      name: 'Bono dotación',
      img: '/assets/img/carousels/4.jpg',
      link :'',
      estado: false,
      icon: 'simple-icon-pencil'
    }
    
  ];

  constructor(private http: HttpClient) { }

  getItemsVidaSaludable(term: string = null): Observable<AdminCarrusel[]> {
    let items = this.itemsVidaSaludable;
    if (term) {
      items = items.filter(x => x.name.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1);
    }
    return of(items).pipe(delay(500));
  }

  public get itemsVidaSaludable() {
    return this._adminCarrusell;
  }


  


}

