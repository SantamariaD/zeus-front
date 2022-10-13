import { CommonModule } from '@angular/common';
import { SiderComponent } from './sider/sider.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from 'src/app/web/informacion/utils/shared.module';
import { ContenedorRoutingModule } from '../paginas/contenedor/contenedor-routing.module';
import { SeccionesCabeceraComponent } from './secciones-cabecera/secciones-cabecera.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FeedbackModule } from './feedback/feedback.module';
import { CardUnoComponent } from './card-uno/card-uno.component';
import { GeneradorPdfComponent } from './generador-pdf/generador-pdf.component';
import { EditorTextoComponent } from './editor-texto/editor-texto.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    SiderComponent,
    FooterComponent,
    NavbarComponent,
    SeccionesCabeceraComponent,
    CardUnoComponent,
    GeneradorPdfComponent,
    EditorTextoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ContenedorRoutingModule,
    FeedbackModule,
    FormsModule,
  ],
  exports: [
    SiderComponent,
    FooterComponent,
    NavbarComponent,
    SeccionesCabeceraComponent,
    CardUnoComponent,
    GeneradorPdfComponent,
    EditorTextoComponent,
  ],
})
export class ComponentesModule {}
