import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface IInsignias {
  id: string;
  subCategoria: string;
  tituloCategoria: string;
  img: string;
  descripcion: string;
  link: string;
  condiciones: string;
  estado: boolean;
  categoria: string;
  statusColor: string;
}

@Injectable({ providedIn: 'root' })
export class InsigniasDataService {
  
  private _insiginias = [
   
    {
      id: '1',
      subCategoria: '#BeKind',
      tituloCategoria: 'Información',
      img: '/assets/img/TiempoParaMi/ITSYOU400.png',
      descripcion: 'Por crear y mantener un ambiente adecuado a través de tu trato hacia mí y otros Softtekians',
      link:'https://onesofttek.sharepoint.com/sites/SKMssh/colombia/ops/ars/Autogestion/Paginas/CertificadoLaboral.aspx#',
      condiciones: '',
      estado: true,
      categoria:'Activo',
      statusColor: 'primary',
    },
    {
      id: '2',
      subCategoria: '#BeCollaborative',
      tituloCategoria: 'Información',
      img: '/assets/img/TiempoParaMi/FAMILYT400.png',
      descripcion: 'Por tu valiosa y continua colaboración. (En la descripción se puede especificar el detalle.',
      link:'https://onesofttek.sharepoint.com/sites/SKMssh/colombia/ops/ars/Autogestion/Paginas/CertificadoLaboral.aspx#',
      condiciones: '',
      estado: true,
      categoria:'Activo',
      statusColor: 'primary',
    },
    {
      id: '3',
      subCategoria: '#BeATechGeek',
      tituloCategoria: 'Información',
      img: '/assets/img/TiempoParaMi/JUST MA 400.png',
      descripcion: 'Porque con tu expertis y mindset tecnológico mantienes vivo nuestro propósito: generar valor a través del uso de la tecnología. ',
      link:'https://onesofttek.sharepoint.com/sites/SKMssh/colombia/ops/ars/Autogestion/Paginas/CertificadoLaboral.aspx#',
      condiciones: '',
      estado: true,
      categoria:'Activo',
      statusColor: 'primary',
    },
    {
      id: '4',
      subCategoria: '#BeAgil',
      tituloCategoria: 'Información',
      img: '/assets/img/TiempoParaMi/EMERGE400.png',
      descripcion: 'Por tu proactividad y flexibilidad sin perder de vista el propósito, haces la diferencia. ',
      link:'https://onesofttek.sharepoint.com/sites/SKMssh/colombia/ops/ars/Autogestion/Paginas/CertificadoLaboral.aspx#',
      condiciones: '',
      estado: true,
      categoria:'Activo',
      statusColor: 'primary',
    },
    {
      id: '5',  
      subCategoria: '#BeTrustsworthy',
      tituloCategoria: 'Información',
      img: '/assets/img/TiempoParaMi/BREA400.png',
      descripcion: 'Por cumplir cabalmente lo que prometes, incrementas mi confianza en ti',
      link:'https://onesofttek.sharepoint.com/sites/SKMssh/colombia/ops/ars/Autogestion/Paginas/CertificadoLaboral.aspx#',
      condiciones: '',
      estado: true,
      categoria:'Activo',
      statusColor: 'primary',
    }
    
    
  ];

  constructor(private http: HttpClient) { }

  getDatosInsignias(term: string = null): Observable<IInsignias[]> {
    let items = this._insiginias;
    debugger;
    if (term) {
     var x =  items.find(element => element.id == term);
     if(x != null){
      items.length = 0;
      items.push(x)
     }
    }
    return of(items).pipe(delay(500));
  }


  public get ObtenerDatosInsignias(){
    return this._insiginias;
  }

}

