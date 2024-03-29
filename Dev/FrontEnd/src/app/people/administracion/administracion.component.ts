import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { IAdministracion , AdministracionDataService } from './administracion.data.service';
import { Router, Event, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import menuItems, { IMenuItem } from 'src/app/constants/menu';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.scss']
})
export class AdministracionComponent implements OnInit {
 
  closeResult: string;
  datosAdministracionAsync: any;
  displayMode = 'image';
  activeIndex = 0;
  @Input() title = '';
  menuItems: IMenuItem[] = menuItems;
  path = '';
  pathArr: string[] = [];

  constructor(private administracionService: AdministracionDataService,private router: Router, 
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

  ngOnInit(): void {
    this.administracionService.getDatosAdministracion().subscribe(
      data => {
        this.datosAdministracionAsync = data;
      });
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
