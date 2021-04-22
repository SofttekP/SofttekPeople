import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface IContenidoReconocimientos {
  id: string;
  subCategoria: string;
  tituloCategoria: string;
  img: string;
  descripcion: string;
  link: string;
  condiciones: string;
}

export interface IContenidoReconocimientosColaboradores {
  id: string;
  idConvenio: string;
  nombre: string;
  img: string;
  fecha: string;
  
}

@Injectable({ providedIn: 'root' })
export class ContenidoReconocimientosDataService {
  
  private _Contenidoreconocimientos = [
    
    {
        id: '6',  
        subCategoria: 'VOM',
        tituloCategoria: 'Inofrmación',
        img: '/assets/img/TiempoParaMi/BREA400.png',
        descripcion: 'Reconocimiento del líder a un Softtekian de su equipo, por su excelente desempeño y estacado comportamiento que generan un impacto positivo en los resultados, la calidad y la mejora en los procesos. ',
        link:'https://onesofttek.sharepoint.com/sites/SKMssh/colombia/ops/ars/Autogestion/Paginas/CertificadoLaboral.aspx#',
        condiciones: 'Aplica para: Softtekians que van más allá de las expectativas, tienen alto compromiso y destacado performance en su equipo de trabajo. Líder: Postula a un Softtekian de tu área aquí'
    },
    {
        id: '7',  
        subCategoria: 'VOC',
        tituloCategoria: 'Inofrmación',
        img: '/assets/img/TiempoParaMi/BREA400.png',
        descripcion: 'Es el reconocimiento o agradecimiento directo de los clientes externos o internos por acciones sobresalientes que superan las expectativas en el servicio',
        link:'https://onesofttek.sharepoint.com/sites/SKMssh/colombia/ops/ars/Autogestion/Paginas/CertificadoLaboral.aspx#',
        condiciones: ''
    },
    {
        id: '8',  
        subCategoria: 'COLABORACIÓN',
        tituloCategoria: 'Inofrmación',
        img: '/assets/img/TiempoParaMi/BREA400.png',
        descripcion: 'Reconocimiento que se otorga a los equipos de trabajo de diferentes áreas o prácticas que afrontaron con eficacia retos que significaron crecimiento al negocio.',
        link:'https://onesofttek.sharepoint.com/sites/SKMssh/colombia/ops/ars/Autogestion/Paginas/CertificadoLaboral.aspx#',
        condiciones: ''
    },
    {
        id: '9',  
        subCategoria: 'BE BOLD',
        tituloCategoria: 'Inofrmación',
        img: '/assets/img/TiempoParaMi/BREA400.png',
        descripcion: 'Es un agradecimiento de Softtekian a Softtekian por acciones cotidianas que están alienadas a la plataforma cultural.',
        link:'https://onesofttek.sharepoint.com/sites/SKMssh/colombia/ops/ars/Autogestion/Paginas/CertificadoLaboral.aspx#',
        condiciones: ''
    },
    {
        id: '10',  
        subCategoria: 'LEAVE A MARK',
        tituloCategoria: 'Inofrmación',
        img: '/assets/img/TiempoParaMi/BREA400.png',
        descripcion: 'Reconocer aquellas personas que por su accionar diario dejan una marca / huella en su cliente, práctica, sede y en la organización',
        link:'https://onesofttek.sharepoint.com/sites/SKMssh/colombia/ops/ars/Autogestion/Paginas/CertificadoLaboral.aspx#',
        condiciones: ''
    }
    
  ];

  private _ContenidoreconocimientosColaboradores = [
    
    {
      id: '1',
      idConvenio: '6',
      nombre: 'Softtekian 1',
      img: '/assets/img/social/usuario.jpg',
      fecha: '2020-12-01',
    },
    {
      id: '2',
      idConvenio: '6',
      nombre: 'Softtekian 2',
      img: '/assets/img/social/usuario.jpg',
      fecha: '2020-12-01',
    },
    {
      id: '3',
      idConvenio: '6',
      nombre: 'Softtekian 3',
      img: '/assets/img/social/usuario.jpg',
      fecha: '2020-12-01',
    },
    {
      id: '4',
      idConvenio: '7',
      nombre: 'Softtekian 4',
      img: '/assets/img/social/usuario.jpg',
      fecha: '2020-12-01',
    },
    {
      id: '5',
      idConvenio: '7',
      nombre: 'Softtekian 5',
      img: '/assets/img/social/usuario.jpg',
      fecha: '2020-12-01',
    },
    {
      id: '6',
      idConvenio: '7',
      nombre: 'Softtekian 6',
      img: '/assets/img/social/usuario.jpg',
      fecha: '2020-12-01',
    },
    {
      id: '8',
      idConvenio: '8',
      nombre: 'Softtekian 7',
      img: '/assets/img/social/usuario.jpg',
      fecha: '2020-12-01',
    },
    {
      id: '9',
      idConvenio: '8',
      nombre: 'Softtekian 8',
      img: '/assets/img/social/usuario.jpg',
      fecha: '2020-12-01',
    },
    {
      id: '10',
      idConvenio: '8',
      nombre: 'Softtekian 9',
      img: '/assets/img/social/usuario.jpg',
      fecha: '2020-12-01',
    },
    {
      id: '11',
      idConvenio: '9',
      nombre: 'Softtekian 10',
      img: '/assets/img/social/usuario.jpg',
      fecha: '2020-12-01',
    },
    {
      id: '12',
      idConvenio: '9',
      nombre: 'Softtekian 11',
      img: '/assets/img/social/usuario.jpg',
      fecha: '2020-12-01',
    },
    {
      id: '13',
      idConvenio: '9',
      nombre: 'Softtekian 12',
      img: '/assets/img/social/usuario.jpg',
      fecha: '2020-12-01',
    },
    {
      id: '14',
      idConvenio: '10',
      nombre: 'Softtekian 13',
      img: '/assets/img/social/usuario.jpg',
      fecha: '2020-12-01',
    }
    ,
    {
      id: '15',
      idConvenio: '10',
      nombre: 'Softtekian 14',
      img: '/assets/img/social/usuario.jpg',
      fecha: '2020-12-01',
    }
    ,
    {
      id: '16',
      idConvenio: '10',
      nombre: 'Softtekian 15',
      img: '/assets/img/social/usuario.jpg',
      fecha: '2020-12-01',
    }

    
  ];
  constructor(private http: HttpClient) { }

  getDatoscontenidoReconocimiento(term: string = null): Observable<IContenidoReconocimientos[]> {
    let items = this._Contenidoreconocimientos;
    if (term) {
     var x =  items.find(element => element.id == term);
     if(x != null){
      items.length = 0;
      items.push(x)
     }
    }
    return of(items).pipe(delay(500));
  }


  public get ObtenerDatosContenidoReconocimiento(){
    return this._Contenidoreconocimientos;
  }


  getDatoscontenidoReconocimientoColaborador(term: string = null): Observable<IContenidoReconocimientosColaboradores[]> {
    let items = this._ContenidoreconocimientosColaboradores;
    
    if (term) {
      items = items.filter(x => x.idConvenio.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1);
    }
    return of(items).pipe(delay(500));
  }

  public get ObtenerDatosContenidoReconocimientoColaborador(){
    return this._ContenidoreconocimientosColaboradores;
  }

}

