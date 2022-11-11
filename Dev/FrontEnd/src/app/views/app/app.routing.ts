import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TiempoParaMiComponent } from '../../people/tiempo-para-mi/tiempo-para-mi.component';
import { ConveniosComponent } from '../../people/convenios/convenios.component';
import { VidaSaludableComponent } from '../../people/equilibrio-vida/equilibrio-vida.component';
import { BeneficiosComponent } from '../../people/beneficios/beneficios.component';
import { ReconocimientosComponent } from '../../people/reconocimientos/reconocimientos.component';
import { AdministracionComponent } from '../../people/administracion/administracion.component';
import { AdministracionEventosComponent } from '../../people/administracion-eventos/administracion-eventos.component';
import { AdministracionPaisesComponent } from '../../people/administracion-paises/administracion-paises.component';
import { AdministracionReconocimientosComponent } from '../../people/administracion-reconocimientos/administracion-reconocimientos.component';
import { AdministracionRolesComponent } from '../../people/administracion-roles/administracion-roles.component';
import { AdministracionTiempoParaMiComponent } from '../../people/administracion-tiempo-para-mi/administracion-tiempo-para-mi.component';
import { CalendarsComponent } from '../../people/calendar/calendar.component';
import { SatisfaccionComponent } from '../../people/satisfaccion/satisfaccion.component';
import { AdministracionConveniosComponent } from '../../people/administracion-convenios/administracion-convenios.component';
import { AdministracionBeneficiosComponent } from '../../people/administracion-beneficios/administracion-beneficios.component';
import { AdministrarCarruselEquilibrioVidaComponent } from '../../people/administrar-carrusel-equilibrio-vida/administrar-carrusel-equilibrio-vida.component';
import { AdministrarInfoEquilibrioVidaComponent } from '../../people/administrar-info-equilibrio-vida/administrar-info-equilibrio-vida.component';
import { AdministracionEquilibrioDeVidaComponent } from '../../people/administracion-equilibrio-de-vida/administracion-equilibrio-de-vida.component';
import { ContenidoReconocimientosComponent } from '../../people/contenido-reconocimientos/contenido-reconocimientos.component';
import { InsigniasComponent } from '../../people/insignias/insignias.component';
import { InfoReconocimientosComponent } from '../../people/info-reconocimientos/info-reconocimientos.component';
import { SatisfaccionChartComponent } from '../../people/satisfaccion-chart/satisfaccion-chart.component';
import { SatisfaccionCommentComponent } from '../../people/satisfaccion-comment/satisfaccion-comment.component';
import { AdministracionContenidoReconocimientosComponent } from '../../people/administracion-contenido-reconocimientos/administracion-contenido-reconocimientos.component';
import { AdministracionContenidoInsigniasComponent } from '../../people/administracion-contenido-insignias/administracion-contenido-insignias.component';



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
            { path: 'prueba', component: CalendarsComponent},
            { path: 'adminInfo', component: AdministrarInfoEquilibrioVidaComponent},
            { path: 'adminCarrusel', component: AdministrarCarruselEquilibrioVidaComponent},
            { path: 'contenidoReconocimiento', component: ContenidoReconocimientosComponent},
            { path: 'infoInsignias', component: InsigniasComponent},
            { path: 'infoReco', component: InfoReconocimientosComponent},
            { path: 'chart', component: SatisfaccionChartComponent},
            { path: 'comment', component: SatisfaccionCommentComponent},
            { path: 'adminContentRec', component: AdministracionContenidoReconocimientosComponent},
            { path: 'adminContentIns', component: AdministracionContenidoInsigniasComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
