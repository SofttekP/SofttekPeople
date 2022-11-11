import { Component, Input, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ConveniosDataService } from '../convenios/convenios.data.service';
import { CrearConvenios } from '../../models/crearConvenios';
import { Lightbox } from 'ngx-lightbox';
import { Router, Event, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import menuItems, { IMenuItem } from 'src/app/constants/menu';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-administracion-convenios',
  templateUrl: './administracion-convenios.component.html',
  styleUrls: ['./administracion-convenios.component.scss']
})
export class AdministracionConveniosComponent implements OnInit {

  modalOptions: NgbModalOptions = {
    backdrop: "static"
  };
  page =1;
  closeResult: string;
  generalPopOver = 'Ayuda';
  descripcionPopOver = 'Las imagenes deben tener una medida en pixeles entre 180x180 y 380x380, se adminte formatos .jpg';
  buttonDisabled = true;
  iconoAyuda: string = "simple-icon-question";
  iconoAgregar: string = "simple-icon-plus";
  nuevaImagen: File;
  datosAdministracionConveniosAsync: any;
  agregarConevnio = new CrearConvenios();
  boolTitulo: true;
  boolDescripcion: true;
  boolCategoria : true;
  boolImg: true;
  @Input() title = '';
  menuItems: IMenuItem[] = menuItems;
  path = '';
  pathArr: string[] = [];

  constructor(private modalService: NgbModal, 
    private ConveniosDataService: ConveniosDataService,
    private lightbox: Lightbox,
    private router: Router, 
    private activatedRoute: ActivatedRoute) { 
      this.router.events
        .pipe(
          filter((event) => event instanceof NavigationEnd),
          map(() => this.activatedRoute),
          map((route) => {
            while (route.firstChild) { route = route.firstChild; }
            return route;
          })
        ).subscribe((event) => {
          this.path = this.router.url.slice(1, this.router.url.split('?')[0].length);
          const paramtersLen = Object.keys(event.snapshot.params).length;
          this.pathArr = this.path.split('/').slice(0, this.path.split('/').length - paramtersLen);
        });
    }

  abierto(content) {
    this.modalService.open(content, this.modalOptions).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
    } else {
        return `with: ${reason}`;
    }
  }

  abrirModal(contentModal) {
    this.abierto(contentModal);
  }

  ngOnInit(): void {
    this.ConveniosDataService.getConvenios().subscribe(
      data => {
        this.datosAdministracionConveniosAsync = data;
      });
  }
  openLightbox(src: string): void {
    this.lightbox.open([{ src, thumb: '' }], 0, { centerVertically: true, positionFromTop: 0, disableScrolling: true, wrapAround: true });
  }

  validarCreacion(){
    if(this.boolTitulo == true && this.boolDescripcion == true && this.boolCategoria == true && this.boolImg == true){
      this.buttonDisabled = false;
    }else{
      this.buttonDisabled = true;
    }
  }

  validarCreacionTitulo(){

  }

  validarCreacionDescripcion(){

  }

  validarCreacionCategoria(){

  }

  validarCreacionImg(){

  }

  AgregarConvenio(){
    
  }

  getUrl = (sub: string) => {
    return '/' + this.path.split(sub)[0] + sub;
  }

  getLabel(path): string {
    if (path === environment.adminRoot) {
      return 'menu.home';
    }

    // step 0
    let foundedMenuItem = this.menuItems.find(x => x.to === path);

    if (!foundedMenuItem) {
      // step 1
      this.menuItems.map(menu => {
        if (!foundedMenuItem && menu.subs) {foundedMenuItem = menu.subs.find(x => x.to === path); }
      });
      if (!foundedMenuItem) {
        // step 2
        this.menuItems.map(menu => {
          if (menu.subs) {
            menu.subs.map(sub => {
                if (!foundedMenuItem && sub.subs) {foundedMenuItem = sub.subs.find(x => x.to === path); }
              });
          }
        });
        if (!foundedMenuItem) {
          // step 3
          this.menuItems.map(menu => {
            if (menu.subs) {
              menu.subs.map(sub => {
                if (sub.subs) {
                  sub.subs.map(deepSub => {
                    if (!foundedMenuItem && deepSub.subs) {foundedMenuItem = deepSub.subs.find(x => x.to === path); }
                  });
                }
              });
            }
          });
        }
      }
    }

    if (foundedMenuItem) { return foundedMenuItem.label; } else { return ''; }
  }

}
