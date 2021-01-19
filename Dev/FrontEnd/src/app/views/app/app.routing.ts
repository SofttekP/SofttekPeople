import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TiempoParaMiComponent } from '../../people/tiempo-para-mi/tiempo-para-mi.component';
import { ConveniosComponent } from '../../people/convenios/convenios.component';
import { VidaSaludableComponent } from '../../people/vida-saludable/vida-saludable.component';
import { BeneficiosComponent } from '../../people/beneficios/beneficios.component';
import { ReconocimientosComponent } from '../../people/reconocimientos/reconocimientos.component';
import { EventosComponent } from '../../people/eventos/eventos.component';
import { AdministracionComponent } from '../../people/administracion/administracion.component'

const routes: Routes = [
    {
        path: '', component: AppComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'vien' },
            { path: 'tiempo', component:  TiempoParaMiComponent},
            { path: 'convenios', component:  ConveniosComponent},
            { path: 'vidaSaludable', component:  VidaSaludableComponent},
            { path: 'beneficios', component:  BeneficiosComponent},
            { path: 'reconocimientos', component:  ReconocimientosComponent},
            { path: 'eventos', component:  EventosComponent},
            { path: 'admin', component:  AdministracionComponent},
            
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
