import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TiempoParaMiComponent } from './people/tiempo-para-mi/tiempo-para-mi.component';

const routes: Routes = [
  //{ path: '', loadChildren: () => import('./views/views.module').then(m => m.ViewsModule) },
  { path: 'tiempo', component: TiempoParaMiComponent, pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
