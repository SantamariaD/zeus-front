import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiderComponent } from './sider/sider.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from 'src/app/share/shared.module';
import { ContenedorRoutingModule } from '../paginas/contenedor/contenedor-routing.module';



@NgModule({
  declarations: [
    SiderComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ContenedorRoutingModule
  ],
  exports: [
    SiderComponent,
    FooterComponent,
    NavbarComponent
  ]
})
export class ComponentesModule { }
