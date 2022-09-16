import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackComponent } from '../feedback/feedback.component';
import { ModalesComponent } from './modales/modales.component';
import { AlertasComponent } from './alertas/alertas.component';
import { ResultadosComponent } from './resultados/resultados.component';

@NgModule({
  declarations: [FeedbackComponent, ModalesComponent, AlertasComponent, ResultadosComponent],
  imports: [CommonModule],
  exports: [FeedbackComponent],
})
export class FeedbackModule {}
