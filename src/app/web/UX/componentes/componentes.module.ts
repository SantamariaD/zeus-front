import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiderComponent } from './sider/sider.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from 'src/app/web/informacion/utils/shared.module';
import { ContenedorRoutingModule } from '../paginas/contenedor/contenedor-routing.module';
import { SeccionesCabeceraComponent } from './secciones-cabecera/secciones-cabecera.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FeedbackModule } from './feedback/feedback.module';
import { CardUnoComponent } from './card-uno/card-uno.component';

@NgModule({
  declarations: [
    SiderComponent,
    FooterComponent,
    NavbarComponent,
    SeccionesCabeceraComponent,
    CardUnoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ContenedorRoutingModule,
    FeedbackModule,
  ],
  exports: [
    SiderComponent,
    FooterComponent,
    NavbarComponent,
    SeccionesCabeceraComponent,
    CardUnoComponent,
  ],
})
export class ComponentesModule {}
