import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CrearNotaTemplateComponent } from './mis-notas/crear-nota-template/crear-nota-template.component';
import { MostrarNotaTemplateComponent } from './mis-notas/mostrar-notas-template/mostrar-nota-template.component';
import { ComponentesModule } from '../componentes/componentes.module';
import { SharedModule } from '../../informacion/utils/shared.module';
import { VerNotaComponent } from './mis-notas/ver-nota/ver-nota.component';
import { FormularioSubtituloComponent } from './mis-notas/ver-nota/formulario-subtitulo/formulario-subtitulo.component';
import { FormularioSubtemaComponent } from './mis-notas/ver-nota/formulario-subtema/formulario-subtema.component';
import { DragDropModule } from '@angular/cdk/drag-drop'

@NgModule({
  declarations: [
    CrearNotaTemplateComponent,
    MostrarNotaTemplateComponent,
    VerNotaComponent,
    FormularioSubtituloComponent,
    FormularioSubtemaComponent,
  ],
  imports: [
    CommonModule,
    ComponentesModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    DragDropModule
  ],
  exports: [
    CrearNotaTemplateComponent,
    MostrarNotaTemplateComponent,
    VerNotaComponent,
  ],
})
export class TemplatesModule {}
