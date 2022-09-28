import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearNotaTemplateComponent } from './mis-notas/crear-nota-template/crear-nota-template.component';
import { MostrarNotaTemplateComponent } from './mis-notas/mostrar-nota-template/mostrar-nota-template.component';

@NgModule({
  declarations: [CrearNotaTemplateComponent, MostrarNotaTemplateComponent],
  imports: [CommonModule],
  exports: [CrearNotaTemplateComponent, MostrarNotaTemplateComponent],
})
export class TemplatesModule {}
