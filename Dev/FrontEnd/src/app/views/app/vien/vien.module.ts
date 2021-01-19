import { NgModule } from '@angular/core';
import { TiempoParaMiComponent } from '../tiempo_para_mi/tiempo_para_mi/tiempo_para_mi.component';
import { VienComponent } from './vien.component';
import { VienRoutingModule } from './vien.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';

@NgModule({
  declarations: [VienComponent, TiempoParaMiComponent],
  imports: [
    SharedModule,
    LayoutContainersModule,
    VienRoutingModule
  ]
})
export class VienModule { }
