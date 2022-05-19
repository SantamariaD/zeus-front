import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './web/paginas/login/login.component';
import { PaginaErrorComponent } from './web/paginas/pagina-error/pagina-error.component';
import { RegistroComponent } from './web/paginas/registro/registro.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'home', loadChildren: () => import('./web/paginas/home/home.module').then(m => m.HomeModule) },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  {
    path: '**',
    component: PaginaErrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
