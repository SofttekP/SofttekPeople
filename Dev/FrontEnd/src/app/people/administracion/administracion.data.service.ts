import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

export interface IAdministracion {
  id: string;
  subCategoria: string;
  tituloCategoria: string;
  img: string;
  descripcion: string;
  link: string;
  condiciones: string;
}

@Injectable({ providedIn: 'root' })
export class AdministracionDataService {

  
  private _administracion = [
    {
      id: '1',
      subCategoria: 'Roles',
      tituloCategoria: 'Inofrmación',
      img: '/assets/img/TiempoParaMi/ITSYOU400.png',
      descripcion: 'Por crear y mantener un ambiente adecuado a través de tu trato hacia mí y otros Softtekians',
      link:'https://onesofttek.sharepoint.com/sites/SKMssh/colombia/ops/ars/Autogestion/Paginas/CertificadoLaboral.aspx#',
      condiciones: ''
      },
    {
      id: '1',
      subCategoria: 'Home',
      tituloCategoria: 'Inofrmación',
      img: '/assets/img/TiempoParaMi/ITSYOU400.png',
      descripcion: 'Por crear y mantener un ambiente adecuado a través de tu trato hacia mí y otros Softtekians',
      link:'https://onesofttek.sharepoint.com/sites/SKMssh/colombia/ops/ars/Autogestion/Paginas/CertificadoLaboral.aspx#',
      condiciones: ''
    },
    {
      id: '1',
      subCategoria: 'Paises',
      tituloCategoria: 'Inofrmación',
      img: '/assets/img/TiempoParaMi/ITSYOU400.png',
      descripcion: 'Por crear y mantener un ambiente adecuado a través de tu trato hacia mí y otros Softtekians',
      link:'https://onesofttek.sharepoint.com/sites/SKMssh/colombia/ops/ars/Autogestion/Paginas/CertificadoLaboral.aspx#',
      condiciones: ''
    },
    {
      id: '1',
      subCategoria: 'Eventos',
      tituloCategoria: 'Inofrmación',
      img: '/assets/img/TiempoParaMi/ITSYOU400.png',
      descripcion: 'Por crear y mantener un ambiente adecuado a través de tu trato hacia mí y otros Softtekians',
      link:'https://onesofttek.sharepoint.com/sites/SKMssh/colombia/ops/ars/Autogestion/Paginas/CertificadoLaboral.aspx#',
      condiciones: ''
    },
    {
      id: '1',
      subCategoria: 'Satisfaccion',
      tituloCategoria: 'Inofrmación',
      img: '/assets/img/TiempoParaMi/ITSYOU400.png',
      descripcion: 'Por crear y mantener un ambiente adecuado a través de tu trato hacia mí y otros Softtekians',
      link:'https://onesofttek.sharepoint.com/sites/SKMssh/colombia/ops/ars/Autogestion/Paginas/CertificadoLaboral.aspx#',
      condiciones: ''
    }
    
  ];

  constructor(private http: HttpClient) { }

  getDatosAdministracion(term: string = null): Observable<IAdministracion[]> {
    let items = this.obtenerDatosAdministracion;
    if (term) {
      items = items.filter(x => x.subCategoria.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1);
    }
    return of(items).pipe(delay(500));
  }

  public get obtenerDatosAdministracion() {
    return this._administracion;
  }

}

