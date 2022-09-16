import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MisCursosComponent } from './mis-cursos.component';
import { SharedModule } from 'src/app/share/shared.module';
import { MostrarCursosComponent } from './mostrar-cursos/mostrar-cursos.component';
import { CrearCursosComponent } from './crear-cursos/crear-cursos.component';
import { EditarCursosComponent } from './editar-cursos/editar-cursos.component';



@NgModule({
  declarations: [MisCursosComponent, MostrarCursosComponent, CrearCursosComponent, EditarCursosComponent],
  imports: [
    SharedModule,
    CommonModule
  ],
  exports: [
    MisCursosComponent
  ]
})
export class MisCursosModule { }
