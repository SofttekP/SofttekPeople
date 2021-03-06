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
import { EventosComponent } from './people/eventos/eventos.component';
import { AdministracionComponent } from './people/administracion/administracion.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { FormsModule } from '@angular/forms'; 


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
    AngularFireModule.initializeApp(environment.firebase),
    PopoverModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    TiempoParaMiComponent,
    ConveniosComponent,
    VidaSaludableComponent,
    BeneficiosComponent,
    ReconocimientosComponent,
    EventosComponent,
    AdministracionComponent
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
