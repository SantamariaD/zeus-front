import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './web/informacion/guards/loginGuard/login.guard';
import { RutasGuard } from './web/informacion/guards/rutasGuard/rutas.guard';
import { BibliotecaComponent } from './web/UX/paginas/biblioteca/biblioteca.component';
import { CompartirComponent } from './web/UX/paginas/compartir/compartir.component';
import { LoginComponent } from './web/UX/paginas/login/login.component';
import { PaginaErrorComponent } from './web/UX/paginas/pagina-error/pagina-error.component';
import { RegistroComponent } from './web/UX/paginas/registro/registro.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'home',
    loadChildren: () =>
      import('./web/UX/paginas/home/home.module').then((m) => m.HomeModule),
    canActivate: [RutasGuard],
  },
  {
    path: 'contenedor',
    loadChildren: () =>
      import('./web/UX/paginas/contenedor/contenedor.module').then((m) => m.ContenedorModule),
    canActivate: [RutasGuard],
  },
  { path: 'compartir', component: CompartirComponent },
  { path: 'biblioteca', component: BibliotecaComponent },
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
