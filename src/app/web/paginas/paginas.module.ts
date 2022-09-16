import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/share/shared.module';
import { RegistroComponent } from './registro/registro.component';
import { CompartirComponent } from './compartir/compartir.component';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { TemplatesModule } from '../templates/templates.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    CompartirComponent,
    BibliotecaComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    TemplatesModule,
  ],
  exports: [LoginComponent, RegistroComponent],
})
export class PaginasModule {}
