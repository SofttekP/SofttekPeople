import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VienComponent } from './vien.component';
import { TiempoParaMiComponent } from '../tiempo_para_mi/tiempo_para_mi/tiempo_para_mi.component';

const routes: Routes = [
    {
        path: '', component: VienComponent,
        children: [
            { path: 'tiempo', component: TiempoParaMiComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VienRoutingModule { }
