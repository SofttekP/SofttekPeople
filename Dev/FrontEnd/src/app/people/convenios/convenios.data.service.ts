import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

export interface Convenios {
  id: string;
  name: string;
  img: string;
  descripcion: string;
  categoria: string;
  statusColor: string;
  estado: boolean;
  icon: string;
}

@Injectable({ providedIn: 'root' })
export class ConveniosDataService {
  private _convenios = [
    {
      id: '1',
      name: 'TIMESPA COLOMBIA',
      img:'/assets/img/convenios/4c1d4f92b93be685a275672c8bc76f4c.jpg',
      descripcion:'Texto descriptivo zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
      categoria:'En espera',
      statusColor: 'primary',
      estado: true,
      icon: 'simple-icon-pencil',
    },
    {
      id: '2',
      name: 'Corpecol',
      img:'/assets/img/convenios/771da4_6df3820042c04ac28e64f081148ad392_mv2.png',
      descripcion:'Texto descriptivo zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
      categoria:'Activo',
      statusColor: 'secondary',
      estado: true,
      icon: 'simple-icon-pencil',
      
    },
    {
      id: '3',
      name: 'Grupo éxito',
      img:'/assets/img/convenios/1200px-Grupo_Exito_logo.svg.png',
      descripcion:'Texto descriptivo zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
      categoria:'Activo',
      statusColor: 'secondary',
      estado: true,
      icon: 'simple-icon-pencil',
    },
    {
      id: '4',
      name: 'International laguage college',
      img:'/assets/img/convenios/1587736339283.png',
      descripcion:'Texto descriptivo zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
      categoria:'En espera',
      statusColor: 'primary',
      estado: true,
      icon: 'simple-icon-pencil',
    },
    {
      id: '5',
      name: 'BODYTECH',
      img:'/assets/img/convenios/bodytech-logo.png',
      descripcion:'Texto descriptivo zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
      categoria:'En espera',
      statusColor: 'primary',
      estado: true,
      icon: 'simple-icon-pencil',
    },
    {
      id: '6',
      name: 'Claro',
      img:'/assets/img/convenios/Claro-dice-contratistas-del-Ministerio-de-Obras-Públicas-causan-40-averías.-NOTIGRAFICAS.COM_.jpg',
      descripcion:'Texto descriptivo zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
      categoria:'Activo',
      statusColor: 'secondary',
      estado: true,
      icon: 'simple-icon-pencil',
    },
    {
      id: '7',
      name: 'Colsanitas',
      img:'/assets/img/convenios/colsanitas_1b45c4cda9123afcb4ef42af07073c39.jpg',
      descripcion:'Texto descriptivo zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
      categoria:'En espera',
      statusColor: 'primary',
      estado: true,
      icon: 'simple-icon-pencil',
    },
    {
      id: '8',
      name: 'IMEVI',
      img:'/assets/img/convenios/dded544223fc49108273205115785thumbnail.png',
      descripcion:'Texto descriptivo zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
      categoria:'En espera',
      statusColor: 'primary',
      estado: true,
      icon: 'simple-icon-pencil',
    },
    {
      id: '9',
      name: 'CATLENA',
      img:'/assets/img/convenios/descarga.jfif',
      descripcion:'Texto descriptivo zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
      categoria:'En espera',
      statusColor: 'secondary',
      estado: true,
      icon: 'simple-icon-pencil',
    },
    {
      id: '10',
      name: 'Compemsar',
      img:'/assets/img/convenios/descarga.png',
      descripcion:'Texto descriptivo zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
      categoria:'Activo',
      statusColor: 'secondary',
      estado: true,
      icon: 'simple-icon-pencil',
    },
    {
      id: '11',
      name: 'itaú',
      img:'/assets/img/convenios/itau.jpg',
      descripcion:'Texto descriptivo zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
      categoria:'Activo',
      statusColor: 'secondary',
      estado: true,
      icon: 'simple-icon-pencil',
    },
    {
      id: '12',
      name: 'PANAMERICANA',
      img:'/assets/img/convenios/Logo Panamericana Web.jpg',
      descripcion:'Texto descriptivo zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
      categoria:'Activo',
      statusColor: 'primary',
      estado: true,
      icon: 'simple-icon-pencil',
    },
    {
      id: '13',
      name: 'ALKOSTO HiperAhorro',
      img:'/assets/img/convenios/Logo_alkosto.jfif',
      descripcion:'Texto descriptivo zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
      categoria:'Activo',
      statusColor: 'primary',
      estado: true,
      icon: 'simple-icon-pencil',
    },
    {
      id: '14',
      name: 'Sura',
      img:'/assets/img/convenios/logo_sura.png',
      descripcion:'Texto descriptivo zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
      categoria:'Activo',
      statusColor: 'primary',
      estado: true,
      icon: 'simple-icon-pencil',
    },
    {
      id: '15',
      name: 'DAVIVIENDA',
      img:'/assets/img/convenios/LOGOS2.005.jpeg',
      descripcion:'Texto descriptivo zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
      categoria:'Activo',
      statusColor: 'primary',
      estado: true,
      icon: 'simple-icon-pencil',
    },
    {
      id: '16',
      name: 'Seguros BOLÍVAR',
      img:'/assets/img/convenios/Logo-Seguros-Bolívar-300x300.jpg',
      descripcion:'Texto descriptivo zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
      categoria:'Activo',
      statusColor: 'primary',
      estado: true,
      icon: 'simple-icon-pencil',
    },
    {
      id: '17',
      name: 'ORTHOESPECIALISTAS',
      img:'/assets/img/convenios/Orthoespecialistas-Logo.png',
      descripcion:'Texto descriptivo zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
      categoria:'Activo',
      statusColor: 'primary',
      estado: true,
      icon: 'simple-icon-pencil',
    },
    {
      id: '18',
      name: 'Ramo',
      img:'/assets/img/convenios/Ramo-empresa-Colombiana-nuevo-logo-01.png',
      descripcion:'Texto descriptivo zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
      categoria:'Activo',
      statusColor: 'primary',
      estado: true,
      icon: 'simple-icon-pencil',
    },
    {
      id: '19',
      name: 'SPINING CENTER GYM',
      img:'/assets/img/convenios/SpinningCenter.jpg',
      descripcion:'Texto descriptivo zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
      categoria:'Activo',
      statusColor: 'primary',
      estado: true,
      icon: 'simple-icon-pencil',
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

