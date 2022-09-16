import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoginService } from 'src/app/web/informacion/servicios/login/login.service';
import { guardarUsuario } from 'src/app/web/informacion/state/usuario/usuario.action';
import { HttpClientServiceInterface } from '../../../informacion/interface/httpService';
import { LoginServiceInterface } from '../../../informacion/interface/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private loginService: LoginService,
    private store: Store,
    private router: Router
  ) {}

  ngOnInit(): void {}

  enviarForm() {
    this.loginService
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(
        (respuestalogin: HttpClientServiceInterface<LoginServiceInterface>) => {
          localStorage.setItem('token', respuestalogin.payload.token);
          localStorage.setItem('rol', respuestalogin.payload.usuario.rol);
          localStorage.setItem(
            'username',
            respuestalogin.payload.usuario.username
          );
           this.store.dispatch(
            guardarUsuario({ usuario: respuestalogin.payload.usuario })
          );
          this.router.navigate(['/home']);
        }
      );
  }
}
