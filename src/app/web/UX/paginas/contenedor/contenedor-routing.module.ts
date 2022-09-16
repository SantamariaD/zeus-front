import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutasGuard } from 'src/app/web/informacion/guards/rutasGuard/rutas.guard';
import { MisArchivosComponent } from './mis-archivos/mis-archivos.component';
import { MisCursosComponent } from './mis-cursos/mis-cursos.component';
import { MisNotasComponent } from './mis-notas/mis-notas.component';
import { MisTareasComponent } from './mis-tareas/mis-tareas.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'mis-cursos',
        component: MisCursosComponent,
        canActivate: [RutasGuard],
      },
      {
        path: 'mis-archivos',
        component: MisArchivosComponent,
        canActivate: [RutasGuard],
      },
      {
        path: 'mis-notas',
        component: MisNotasComponent,
        canActivate: [RutasGuard],
      },
      {
        path: 'mis-tareas',
        component: MisTareasComponent,
        canActivate: [RutasGuard],
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContenedorRoutingModule {}
