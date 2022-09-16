import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/web/informacion/utils/shared.module';
import { MisNotasComponent } from './mis-notas.component';
import { CrearComponent } from './crear/crear.component';
import { MostrarComponent } from './mostrar/mostrar.component';
import { ComponentesModule } from '../../../componentes/componentes.module';

@NgModule({
  declarations: [MisNotasComponent, CrearComponent, MostrarComponent],
  imports: [SharedModule, CommonModule, ComponentesModule],
  exports: [MisNotasComponent, CrearComponent, MostrarComponent],
})
export class MisNotasModule {}
