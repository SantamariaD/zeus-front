import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearNotaTemplateComponent } from './mis-notas/crear-nota-template/crear-nota-template.component';
import { MostrarNotaTemplateComponent } from './mis-notas/mostrar-nota-template/mostrar-nota-template.component';
import { ComponentesModule } from '../componentes/componentes.module';

@NgModule({
  declarations: [CrearNotaTemplateComponent, MostrarNotaTemplateComponent],
  imports: [CommonModule, ComponentesModule],
  exports: [CrearNotaTemplateComponent, MostrarNotaTemplateComponent],
})
export class TemplatesModule {}
