import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { IAdministracion , AdministracionDataService } from './administracion.data.service';


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


  constructor(private administracionService: AdministracionDataService) { }

  ngOnInit(): void {
    this.administracionService.getDatosAdministracion().subscribe(
      data => {
        this.datosAdministracionAsync = data;
      });
  }
}
