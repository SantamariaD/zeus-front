import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/share/shared.module';
import { MisNotasComponent } from './mis-notas.component';
import { ComponentesModule } from 'src/app/web/componentes/componentes.module';
import { CrearComponent } from './crear/crear.component';
import { MostrarComponent } from './mostrar/mostrar.component';



@NgModule({
  declarations: [MisNotasComponent, CrearComponent, MostrarComponent],
  imports: [
    SharedModule,
    CommonModule,
    ComponentesModule
  ],
  exports: [
    MisNotasComponent
  ]
})
export class MisNotasModule { }
