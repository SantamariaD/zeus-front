import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../servicios/login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  cerrarSesion() {
    if (!localStorage.getItem('token')) return console.log('No hay token');

    this.loginService.cerrarSesionService().subscribe({
      next: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('rol');
        localStorage.removeItem('username');
        this.router.navigate(['/login']);
      },
      error: (error) => console.log(error),
    });
  }
}
