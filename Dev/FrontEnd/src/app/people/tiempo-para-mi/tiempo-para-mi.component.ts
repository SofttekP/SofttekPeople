import {Component, ElementRef, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import { TranslateService } from '@ngx-translate/core';
import { ModalGeneralComponent } from './modal-general';



@Component({
  selector: 'app-tiempo-para-mi',
  templateUrl: './tiempo-para-mi.component.html',
  styleUrls: ['./tiempo-para-mi.component.scss']
})
export class TiempoParaMiComponent implements OnInit {

  titulo = 'Como solicitar tu día de cumpleaños';
  tituloFamilia = 'Como solicitar tu día de familia';
  tituloEmergencias = 'Como solitiar tu día para emergencias medicas';
  tituloVacacioens = 'Como solicitar tus vacaciones';
  tituloBoda = 'Como solicitar el día para tu boda';

  pruebaPopOver = '¿Sabes cómo solicitar tu día de cumpleaños?';
  pruebasPopOver = 'Aca te contamos';

  popOverFamilia = '¿Sabes cómo solicitar tu día de familia?';
  popOverDiaFamilia = 'Aca te contamos';

  popOverEmergencia = '¿Sabes cómo solicitar tu día para emergencias medicas?';
  popOverDiaEmergencia = 'Aca te contamos';

  popOverVacaciones = '¿Sabes cómo solicitar tus vacaciones?';
  popOverVacacion = 'Aca te contamos';

  popOverBoda = '¿Sabes cómo solicitar el día para tu boda?';
  popOverDiaBoda = 'Aca te contamos';

  displayMode = 'image';
  activeIndex = 0;
  glideCarouselImages;
  glideCarouselThumbs;
  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService, private translateService: TranslateService) { }
  imgCumpleanos = '/assets/img/TiempoParaMi/diaCumpleaños.jpg';
  imgFamilia = '/assets/img/TiempoParaMi/familia.jpg';
  imgEmergencia = '/assets/img/TiempoParaMi/emergenciaMedica.jpg';
  imgVacaciones = '/assets/img/TiempoParaMi/vacaciones.jpg';
  imgBoda = '/assets/img/TiempoParaMi/diaBoda.jpg';
   @ViewChild('template', { static: true }) template: TemplateRef<any>;
 ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  abrirModal(){
    const initialState = {
      list: [
        '...',
        '..'
      ],
      title: this.translateService.instant(this.titulo)
    };
    this.bsModalRef = this.modalService.show(ModalGeneralComponent, { initialState });
    this.bsModalRef.content.closeBtnName = this.translateService.instant('modal.close');
  }
  // tslint:disable-next-line:typedef
  abrirModalFamilia(){
    const initialState = {
      list: [
        '...',
        '..'
      ],
      title: this.translateService.instant(this.tituloFamilia)
    };
    this.bsModalRef = this.modalService.show(ModalGeneralComponent, { initialState });
    this.bsModalRef.content.closeBtnName = this.translateService.instant('modal.close');
  }
  // tslint:disable-next-line:typedef
  abrirModalEmergencia(){
    const initialState = {
      list: [
        '...',
        '..'
      ],
      title: this.translateService.instant(this.tituloEmergencias)
    };
    this.bsModalRef = this.modalService.show(ModalGeneralComponent, { initialState });
    this.bsModalRef.content.closeBtnName = this.translateService.instant('modal.close');
  }
  // tslint:disable-next-line:typedef
  abrirModalVacaciones(){
    const initialState = {
      list: [
        '...',
        '..'
      ],
      title: this.translateService.instant(this.tituloVacacioens)
    };
    this.bsModalRef = this.modalService.show(ModalGeneralComponent, { initialState });
    this.bsModalRef.content.closeBtnName = this.translateService.instant('modal.close');
  }
  // tslint:disable-next-line:typedef
  abrirModalBoda(){
    const initialState = {
      list: [
        '...',
        '..'
      ],
      title: this.translateService.instant(this.tituloBoda)
    };
    this.bsModalRef = this.modalService.show(ModalGeneralComponent, { initialState });
    this.bsModalRef.content.closeBtnName = this.translateService.instant('modal.close');
  }
}
