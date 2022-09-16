import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MisNotasComponent } from './mis-notas/mis-notas.component';



@NgModule({
  declarations: [
    MisNotasComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MisNotasComponent
  ]
})
export class TemplatesModule { }
