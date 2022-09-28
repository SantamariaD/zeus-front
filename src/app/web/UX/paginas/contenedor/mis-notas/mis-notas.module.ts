import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/web/informacion/utils/shared.module';
import { MisNotasComponent } from './mis-notas.component';
import { ComponentesModule } from '../../../componentes/componentes.module';
import { TemplatesModule } from '../../../templates/templates.module';

@NgModule({
  declarations: [MisNotasComponent],
  imports: [SharedModule, CommonModule, ComponentesModule, TemplatesModule],
  exports: [MisNotasComponent],
})
export class MisNotasModule {}
