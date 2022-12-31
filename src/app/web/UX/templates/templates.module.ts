import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CrearNotaTemplateComponent } from './mis-notas/crear-nota-template/crear-nota-template.component';
import { MostrarNotaTemplateComponent } from './mis-notas/mostrar-notas-template/mostrar-nota-template.component';
import { ComponentesModule } from '../componentes/componentes.module';
import { SharedModule } from '../../informacion/utils/shared.module';
import { VerNotaComponent } from './mis-notas/ver-nota/ver-nota.component';

@NgModule({
  declarations: [CrearNotaTemplateComponent, MostrarNotaTemplateComponent, VerNotaComponent],
  imports: [CommonModule, ComponentesModule, FormsModule, ReactiveFormsModule, SharedModule],
  exports: [CrearNotaTemplateComponent, MostrarNotaTemplateComponent, VerNotaComponent],
})
export class TemplatesModule {}
