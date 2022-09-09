import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/share/shared.module';
import { MisNotasComponent } from './mis-notas.component';



@NgModule({
  declarations: [MisNotasComponent],
  imports: [
    SharedModule,
    CommonModule
  ],
  exports: [
    MisNotasComponent
  ]
})
export class MisNotasModule { }
