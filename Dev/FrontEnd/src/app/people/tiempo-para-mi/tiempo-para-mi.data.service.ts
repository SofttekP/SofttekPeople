import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

export interface TiempoParaMi {
  id: string;
  subCategoria: string;
  tituloCategoria: string;
  img: string;
  descripcion: string;
  link: string;
  estado: boolean;
  icon: string;
}

@Injectable({ providedIn: 'root' })
export class TiempoParaMiDataService {
  
  private _datosTiempoParaMi = [
   
    {
      id: '1',
      subCategoria: 'Happy Birth-Day',
      tituloCategoria: 'Como solicitar tu día de cumpleaños',
      img: '/assets/img/TiempoParaMi/ITSYOU400.png',
      descripcion: 'Descansa y disfruta junto a tus seres queridos en tu día de cumpleaños.*Si es fin de semana o festivo aplica al día laboral anterior o siguiente a la fecha*',
      link:'https://onesofttek.sharepoint.com/sites/SKMssh/colombia/ops/ars/Autogestion/Paginas/CertificadoLaboral.aspx#',
      estado: true,
      icon: 'simple-icon-pencil'
    },
    {
      id: '2',
      subCategoria: 'Family Day',
      tituloCategoria: 'Como solicitar tu día de familia',
      img: '/assets/img/TiempoParaMi/FAMILYT400.png',
      descripcion: '“Siempre habrá tiempo para la familia” Comparte junto a tus seres queridos el día laboral de tu interés. *Aplica un día por semestre* ',
      link:'https://onesofttek.sharepoint.com/sites/SKMssh/colombia/ops/ars/Autogestion/Paginas/CertificadoLaboral.aspx#',
      estado: true,
      icon: 'simple-icon-pencil'
    },
    {
      id: '3',
      subCategoria: 'Weeding Time',
      tituloCategoria: '¿Sabes cómo solicitar el día para tu boda?',
      img: '/assets/img/TiempoParaMi/JUST MA 400.png',
      descripcion: '¡Celebramos contigo! Por esta razón te brindamos 3 días libres para compartir con tu pareja después de su boda. ',
      link:'https://onesofttek.sharepoint.com/sites/SKMssh/colombia/ops/ars/Autogestion/Paginas/CertificadoLaboral.aspx#',
      estado: true,
      icon: 'simple-icon-pencil'
    },
    {
      id: '5',  
      subCategoria: 'Holidays',
      tituloCategoria: 'Como solicitar tus vacaciones',
      img: '/assets/img/TiempoParaMi/BREA400.png',
      descripcion: 'Disfruta de 15 días hábiles para hacer una pausa, tomar un descanso y recargar baterías.',
      link:'https://onesofttek.sharepoint.com/sites/SKMssh/colombia/ops/ars/Autogestion/Paginas/CertificadoLaboral.aspx#',
      estado: true,
      icon: 'simple-icon-pencil'
    },
    {
      id: '4',
      subCategoria: 'Family Medical Emergencies',
      tituloCategoria: 'Como solitiar tu día para emergencias medicas',
      img: '/assets/img/TiempoParaMi/EMERGE400.png',
      descripcion: 'Tú y tu familia son importantes para nosotros, por esta razón, ante cualquier eventualidad, te brindaremos un día laboral al año para atender emergencias médicas familiares. ',
      link:'https://onesofttek.sharepoint.com/sites/SKMssh/colombia/ops/ars/Autogestion/Paginas/CertificadoLaboral.aspx#',
      estado: false,
      icon: 'simple-icon-pencil'
    }
    
  ];

  constructor(private http: HttpClient) { }

  getDatosTiempoParaMi(term: string = null): Observable<TiempoParaMi[]> {
    let items = this._datosTiempoParaMi;
    if (term) {
      items = items.filter(x => x.subCategoria.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1);
    }
    return of(items).pipe(delay(500));
  }


  public get ObtenerDatosTiempoParaMi(){
    return this._datosTiempoParaMi;
  }

}

