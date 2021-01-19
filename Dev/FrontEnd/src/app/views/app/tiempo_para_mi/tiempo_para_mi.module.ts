import { NgModule } from '@angular/core';
import { TiempoParaMiComponent } from './tiempo_para_mi/tiempo_para_mi.component';
import { TiempoParaMiMenuComponent } from './tiempo_para_mi.component';
import { TiempoParaMiRoutingModule } from './tiempo_para_mi.routing';
import { SharedModule } from '../../../shared/shared.module';
import { LayoutContainersModule } from '../../../containers/layout/layout.containers.module';

@NgModule({
  declarations: [TiempoParaMiMenuComponent, TiempoParaMiComponent],
  imports: [
    SharedModule,
    LayoutContainersModule,
    TiempoParaMiRoutingModule
  ]
})
export class TiempoParaMiMenuModule { }
