import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MisTareasComponent } from './mis-tareas.component';
import { SharedModule } from 'src/app/web/informacion/utils/shared.module';



@NgModule({
  declarations: [MisTareasComponent],
  imports: [
    SharedModule,
    CommonModule
  ],
  exports: [
    MisTareasComponent
  ]
})
export class MisTareasModule { }
