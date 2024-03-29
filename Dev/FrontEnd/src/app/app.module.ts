import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { ViewsModule } from './views/views.module';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { LayoutContainersModule } from './containers/layout/layout.containers.module';
import { TiempoParaMiComponent } from './people/tiempo-para-mi/tiempo-para-mi.component';
import { ConveniosComponent } from './people/convenios/convenios.component';
import { VidaSaludableComponent } from './people/equilibrio-vida/equilibrio-vida.component';
import { BeneficiosComponent } from './people/beneficios/beneficios.component';
import { ReconocimientosComponent } from './people/reconocimientos/reconocimientos.component';
import { AdministracionComponent } from './people/administracion/administracion.component';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { FormsModule } from '@angular/forms'; 
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { AdministracionRolesComponent } from './people/administracion-roles/administracion-roles.component';
import { AdministracionTiempoParaMiComponent } from './people/administracion-tiempo-para-mi/administracion-tiempo-para-mi.component';
import { AdministracionPaisesComponent } from './people/administracion-paises/administracion-paises.component';
import { AdministracionEventosComponent } from './people/administracion-eventos/administracion-eventos.component';
import { SatisfaccionComponent } from './people/satisfaccion/satisfaccion.component';
import { WizardEndStepComponent } from '../app/containers/wizard/end-step/wizard-end-step.component';
import { WizardValidationComponent } from '../app/containers/wizard/validation/wizard-validation.component';
import { WizardIconsComponent } from '../app/containers/wizard/icons/wizard-icons.component';
import { WizardVerticalComponent } from '../app/containers/wizard/vertical/wizard-vertical.component';
import { WizardBasicComponent } from '../app/containers/wizard/basic/wizard-basic.component';
import { ArchwizardModule } from 'angular-archwizard';
import { AdministracionConveniosComponent } from './people/administracion-convenios/administracion-convenios.component';
import { AdministracionEquilibrioDeVidaComponent } from './people/administracion-equilibrio-de-vida/administracion-equilibrio-de-vida.component';
import { AdministracionBeneficiosComponent } from './people/administracion-beneficios/administracion-beneficios.component';
import { AdministracionReconocimientosComponent } from './people/administracion-reconocimientos/administracion-reconocimientos.component';
import { UiSwitchModule } from 'node_modules/ngx-ui-switch';
import { LightboxModule } from 'ngx-lightbox';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule} from 'ngx-bootstrap/pagination';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ChartsModule } from 'ng2-charts';
import { AdministrarCarruselEquilibrioVidaComponent } from './people/administrar-carrusel-equilibrio-vida/administrar-carrusel-equilibrio-vida.component';
import { AdministrarInfoEquilibrioVidaComponent } from './people/administrar-info-equilibrio-vida/administrar-info-equilibrio-vida.component';
import { ContenidoReconocimientosComponent } from './people/contenido-reconocimientos/contenido-reconocimientos.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { InsigniasComponent } from './people/insignias/insignias.component';
import { InfoReconocimientosComponent } from './people/info-reconocimientos/info-reconocimientos.component';
import { SatisfaccionChartComponent } from './people/satisfaccion-chart/satisfaccion-chart.component';
import { SatisfaccionCommentComponent } from './people/satisfaccion-comment/satisfaccion-comment.component';
import { MatTabsModule } from '@angular/material/tabs';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarsComponent } from './people/calendar/calendar.component';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { AdministracionContenidoReconocimientosComponent } from './people/administracion-contenido-reconocimientos/administracion-contenido-reconocimientos.component';
import { AdministracionContenidoInsigniasComponent } from './people/administracion-contenido-insignias/administracion-contenido-insignias.component';

registerLocaleData(localeEs);

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);



@NgModule({
  imports: [
    ArchwizardModule,
    BrowserModule ,
    ModalModule.forRoot(),
    ViewsModule,
    AppRoutingModule,
    UiSwitchModule,
    LightboxModule,
    LayoutContainersModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
    HttpClientModule,
    NgSelectModule,
    FormsModule,
    ChartsModule,
    MatTabsModule,
    CommonModule,
    NgxPaginationModule,
    TooltipModule.forRoot(),
    PaginationModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    PopoverModule.forRoot(),
    NgbModule,
    IvyCarouselModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  declarations: [
    AppComponent,
    TiempoParaMiComponent,
    ConveniosComponent,
    VidaSaludableComponent,
    BeneficiosComponent,
    ReconocimientosComponent,
    AdministracionComponent,
    AdministracionRolesComponent,
    AdministracionTiempoParaMiComponent,
    AdministracionPaisesComponent,
    AdministracionEventosComponent,
    SatisfaccionComponent,
    WizardBasicComponent,
    WizardEndStepComponent,
    WizardValidationComponent,
    WizardIconsComponent,
    WizardVerticalComponent,
    WizardBasicComponent,
    WizardEndStepComponent,
    WizardValidationComponent,
    WizardIconsComponent,
    WizardVerticalComponent,
    AdministracionConveniosComponent,
    AdministracionEquilibrioDeVidaComponent,
    AdministracionBeneficiosComponent,
    AdministracionReconocimientosComponent,
    AdministrarCarruselEquilibrioVidaComponent,
    AdministrarInfoEquilibrioVidaComponent,
    ContenidoReconocimientosComponent,
    InsigniasComponent,
    InfoReconocimientosComponent,
    SatisfaccionChartComponent,
    SatisfaccionCommentComponent,
    CalendarsComponent,
    AdministracionContenidoReconocimientosComponent,
    AdministracionContenidoInsigniasComponent
    
  ],
  exports:[
    
    NgxPaginationModule,
    
    
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
