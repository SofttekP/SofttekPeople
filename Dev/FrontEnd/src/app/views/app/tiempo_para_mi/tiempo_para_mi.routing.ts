import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  TiempoParaMiMenuComponent} from './tiempo_para_mi.component';
import { TiempoParaMiComponent } from './tiempo_para_mi/tiempo_para_mi.component';

const routes: Routes = [
    {
        path: '', component: TiempoParaMiMenuComponent,
        children: [
            { path: '', redirectTo: 'tiempoParaMi', pathMatch: 'full' },
            { path: 'tiempoParaMi', component: TiempoParaMiComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TiempoParaMiRoutingModule { }
