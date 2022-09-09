import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenedorComponent } from './contenedor.component';
import { MisArchivosComponent } from './mis-archivos/mis-archivos.component';
import { ContenedorRoutingModule } from './contenedor-routing.module';
import { SharedModule } from 'src/app/share/shared.module';
import { MisCursosModule } from './mis-cursos/mis-cursos.module';
import { MisArchivosModule } from './mis-archivos/mis-archivos.module';
import { MisNotasModule } from './mis-notas/mis-notas.module';
import { MisTareasModule } from './mis-tareas/mis-tareas.module';

@NgModule({
  declarations: [ContenedorComponent],
  imports: [
    CommonModule,
    ContenedorRoutingModule,
    SharedModule,
    MisCursosModule,
    MisArchivosModule,
    MisNotasModule,
    MisTareasModule,
  ],
  exports: [ContenedorComponent, MisArchivosComponent],
})
export class ContenedorModule {}
