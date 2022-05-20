import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './web/guards/loginGuard/login.guard';
import { RutasGuard } from './web/guards/rutasGuard/rutas.guard';
import { LoginComponent } from './web/paginas/login/login.component';
import { PaginaErrorComponent } from './web/paginas/pagina-error/pagina-error.component';
import { RegistroComponent } from './web/paginas/registro/registro.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'home',
    loadChildren: () =>
      import('./web/paginas/home/home.module').then((m) => m.HomeModule),
    canActivate: [RutasGuard],
  },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'registro', component: RegistroComponent },
  {
    path: '**',
    component: PaginaErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
