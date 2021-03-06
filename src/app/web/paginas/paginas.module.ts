import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/share/shared.module';
import { RegistroComponent } from './registro/registro.component';



@NgModule({
  declarations: [LoginComponent, RegistroComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [LoginComponent, RegistroComponent]
})
export class PaginasModule { }
