import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/share/shared.module';
import { MisArchivosComponent } from './mis-archivos.component';



@NgModule({
  declarations: [MisArchivosComponent],
  imports: [
    SharedModule,
    CommonModule
  ],
  exports: [
    MisArchivosComponent
  ]
})
export class MisArchivosModule { }
