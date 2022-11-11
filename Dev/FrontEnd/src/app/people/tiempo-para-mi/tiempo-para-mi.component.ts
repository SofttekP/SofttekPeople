import {Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import { TranslateService } from '@ngx-translate/core';
import { ModalGeneralComponent } from './modal-general';
import menuItems, { IMenuItem } from 'src/app/constants/menu';
import { environment } from 'src/environments/environment';
import { TiempoParaMiDataService, TiempoParaMi } from './tiempo-para-mi.data.service';
import { NgbModal, NgbModalOptions, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import products from 'src/app/data/products';
import { IProduct } from 'src/app/data/api.service';
import { Router, Event, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-tiempo-para-mi',
  templateUrl: './tiempo-para-mi.component.html',
  styleUrls: ['./tiempo-para-mi.component.scss']
})
export class TiempoParaMiComponent implements OnInit, OnDestroy {
  @ViewChild('modalEncuesta', {static: false}) modalX: any;
  @Input() title = '';
  menuItems: IMenuItem[] = menuItems;
  modalOptions: NgbModalOptions = {
    backdrop: "static"
  };
  closeResult: string;
  generalPopOver = '¿Sabes cómo solicitarlo?';
  descripcionPopOver = 'Acá te contamos';
  datosTiempoParaMiAsync: any;
  displayMode = 'image';
  activeIndex = 0;
  bsModalRef: BsModalRef;
  path = '';
  pathArr: string[] = [];




  constructor( private translateService: TranslateService, 
                private tiempoDatService: TiempoParaMiDataService, 
                private modalService: NgbModal,
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
  
  ngOnDestroy(): void {
    this.openEncuesta(this.modalX);
  }


  data: IProduct[] = products.slice(0, 18);
  ngOnInit(): void {

  this.tiempoDatService.getDatosTiempoParaMi().subscribe(
    data => {
      this.datosTiempoParaMiAsync = data;
    });

  }


  getUrl = (sub: string) => {
    return '/' + this.path.split(sub)[0] + sub;
  }
  
  abierto(content) {

    this.modalService.open(content, this.modalOptions).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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


openEncuesta(modal) {
  this.modalService.open(modal, { size: 'md', centered: true, backdrop: 'static',
  keyboard: false });
}

}
