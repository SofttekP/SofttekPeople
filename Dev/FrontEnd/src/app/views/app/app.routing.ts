import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TiempoParaMiComponent } from '../../people/tiempo-para-mi/tiempo-para-mi.component';
import { ConveniosComponent } from '../../people/convenios/convenios.component';
import { VidaSaludableComponent } from '../../people/vida-saludable/vida-saludable.component';
import { BeneficiosComponent } from '../../people/beneficios/beneficios.component';
import { ReconocimientosComponent } from '../../people/reconocimientos/reconocimientos.component';
import { AdministracionComponent } from '../../people/administracion/administracion.component';
import { AdministracionEventosComponent } from '../../people/administracion-eventos/administracion-eventos.component';
import { AdministracionPaisesComponent } from '../../people/administracion-paises/administracion-paises.component';
import { AdministracionReconocimientosComponent } from '../../people/administracion-reconocimientos/administracion-reconocimientos.component';
import { AdministracionRolesComponent } from '../../people/administracion-roles/administracion-roles.component';
import { AdministracionTiempoParaMiComponent } from '../../people/administracion-tiempo-para-mi/administracion-tiempo-para-mi.component';
import { CalendarsComponent } from '../../people/calendar-eventos/calendar.component';
import { SatisfaccionComponent } from '../../people/satisfaccion/satisfaccion.component';
import { AdministracionConveniosComponent } from '../../people/administracion-convenios/administracion-convenios.component';
import { AdministracionBeneficiosComponent } from '../../people/administracion-beneficios/administracion-beneficios.component';
import { AdministracionEquilibrioDeVidaComponent } from '../../people/administracion-equilibrio-de-vida/administracion-equilibrio-de-vida.component';

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
            { path: 'admin', component:  AdministracionComponent},
            { path: 'eventos', component:  CalendarsComponent},
            { path: 'adminEventos', component:  AdministracionEventosComponent},
            { path: 'adminPaises', component:  AdministracionPaisesComponent},
            { path: 'adminRecomocimientos', component:  AdministracionReconocimientosComponent},
            { path: 'adminRol', component:  AdministracionRolesComponent},
            { path: 'adminTiempo', component:  AdministracionTiempoParaMiComponent},
            { path: 'satisfaccion', component:  SatisfaccionComponent},
            { path: 'adminConvenios', component:  AdministracionConveniosComponent},
            { path: 'adminBeneficios', component:  AdministracionBeneficiosComponent},
            { path: 'adminEquilibrio', component:  AdministracionEquilibrioDeVidaComponent},
            
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
