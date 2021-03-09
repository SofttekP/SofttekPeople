import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { VidaSaludableComponent } from './people/vida-saludable/vida-saludable.component';
import { BeneficiosComponent } from './people/beneficios/beneficios.component';
import { ReconocimientosComponent } from './people/reconocimientos/reconocimientos.component';
import { AdministracionComponent } from './people/administracion/administracion.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { FormsModule } from '@angular/forms'; 
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarEventosComponent } from './people/calendar-eventos/calendar-eventos.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { AdministracionRolesComponent } from './people/administracion-roles/administracion-roles.component';
import { AdministracionContenidoComponent } from './people/administracion-contenido/administracion-contenido.component';
import { AdministracionPaisesComponent } from './people/administracion-paises/administracion-paises.component';
import { AdministracionEventosComponent } from './people/administracion-eventos/administracion-eventos.component';
import { SatisfacionComponent } from './people/satisfacion/satisfacion.component';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);



@NgModule({
  imports: [
    BrowserModule ,
    ModalModule.forRoot(),
    ViewsModule,
    AppRoutingModule,
    LayoutContainersModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
    HttpClientModule,
    NgSelectModule,
    FormsModule,
    FullCalendarModule,
    AngularFireModule.initializeApp(environment.firebase),
    PopoverModule.forRoot(),
    NgbModule,
    IvyCarouselModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  declarations: [
    AppComponent,
    TiempoParaMiComponent,
    ConveniosComponent,
    VidaSaludableComponent,
    BeneficiosComponent,
    ReconocimientosComponent,
    AdministracionComponent,
    CalendarEventosComponent,
    AdministracionRolesComponent,
    AdministracionContenidoComponent,
    AdministracionPaisesComponent,
    AdministracionEventosComponent,
    SatisfacionComponent
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
