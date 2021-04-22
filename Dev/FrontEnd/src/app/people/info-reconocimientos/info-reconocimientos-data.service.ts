import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface IInfoReconocimientos {
  id: string;
  subCategoria: string;
  tituloCategoria: string;
  img: string;
  descripcion: string;
  link: string;
  condiciones: string;
  estado: boolean;
}

@Injectable({ providedIn: 'root' })
export class InfoReconocimientosDataService {
  
  private _infoReconocimientos = [
    {
        id: '6',  
        subCategoria: 'VOM',
        tituloCategoria: 'Inofrmación',
        img: '/assets/img/TiempoParaMi/BREA400.png',
        descripcion: 'Reconocimiento del líder a un Softtekian de su equipo, por su excelente desempeño y estacado comportamiento que generan un impacto positivo en los resultados, la calidad y la mejora en los procesos. ',
        link:'https://onesofttek.sharepoint.com/sites/SKMssh/colombia/ops/ars/Autogestion/Paginas/CertificadoLaboral.aspx#',
        condiciones: 'Aplica para: Softtekians que van más allá de las expectativas, tienen alto compromiso y destacado performance en su equipo de trabajo. Líder: Postula a un Softtekian de tu área aquí',
        estado: true
    },
        {
        id: '7',  
        subCategoria: 'VOC',
        tituloCategoria: 'Inofrmación',
        img: '/assets/img/TiempoParaMi/BREA400.png',
        descripcion: 'Es el reconocimiento o agradecimiento directo de los clientes externos o internos por acciones sobresalientes que superan las expectativas en el servicio',
        link:'https://onesofttek.sharepoint.com/sites/SKMssh/colombia/ops/ars/Autogestion/Paginas/CertificadoLaboral.aspx#',
        condiciones: '',
        estado: true
        },
        {
            id: '8',  
            subCategoria: 'COLABORACIÓN',
            tituloCategoria: 'Inofrmación',
            img: '/assets/img/TiempoParaMi/BREA400.png',
            descripcion: 'Reconocimiento que se otorga a los equipos de trabajo de diferentes áreas o prácticas que afrontaron con eficacia retos que significaron crecimiento al negocio.',
            link:'https://onesofttek.sharepoint.com/sites/SKMssh/colombia/ops/ars/Autogestion/Paginas/CertificadoLaboral.aspx#',
            condiciones: '',
            estado: true
        },
        {
            id: '9',  
            subCategoria: 'BE BOLD',
            tituloCategoria: 'Inofrmación',
            img: '/assets/img/TiempoParaMi/BREA400.png',
            descripcion: 'Es un agradecimiento de Softtekian a Softtekian por acciones cotidianas que están alienadas a la plataforma cultural.',
            link:'https://onesofttek.sharepoint.com/sites/SKMssh/colombia/ops/ars/Autogestion/Paginas/CertificadoLaboral.aspx#',
            condiciones: '',
            estado: true
        },
        {
            id: '10',  
            subCategoria: 'LEAVE A MARK',
            tituloCategoria: 'Inofrmación',
            img: '/assets/img/TiempoParaMi/BREA400.png',
            descripcion: 'Reconocer aquellas personas que por su accionar diario dejan una marca / huella en su cliente, práctica, sede y en la organización',
            link:'https://onesofttek.sharepoint.com/sites/SKMssh/colombia/ops/ars/Autogestion/Paginas/CertificadoLaboral.aspx#',
            condiciones: '',
            estado: true
        }
    
  ];

  constructor(private http: HttpClient) { }

  getDatosInfoReconocimientos(term: string = null): Observable<IInfoReconocimientos[]> {
    let items = this._infoReconocimientos;
    
    if (term) {
     var x =  items.find(element => element.id == term);
     if(x != null){
      items.length = 0;
      items.push(x)
     }
    }
    return of(items).pipe(delay(500));
  }


  public get ObtenerDatosInfoReconocimientos(){
    return this._infoReconocimientos;
  }

}

