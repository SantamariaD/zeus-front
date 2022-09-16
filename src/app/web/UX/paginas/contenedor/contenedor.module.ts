import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MisArchivosComponent } from './mis-archivos/mis-archivos.component';
import { ContenedorRoutingModule } from './contenedor-routing.module';
import { SharedModule } from 'src/app/web/informacion/utils/shared.module';
import { MisCursosModule } from './mis-cursos/mis-cursos.module';
import { MisArchivosModule } from './mis-archivos/mis-archivos.module';
import { MisNotasModule } from './mis-notas/mis-notas.module';
import { MisTareasModule } from './mis-tareas/mis-tareas.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContenedorRoutingModule,
    SharedModule,
    MisCursosModule,
    MisArchivosModule,
    MisNotasModule,
    MisTareasModule,
  ],
  exports: [MisArchivosComponent],
})
export class ContenedorModule {}
