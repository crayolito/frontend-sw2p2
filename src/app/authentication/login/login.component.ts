import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { PerfilService, PerfilStatus } from '../../dashboard/pages/perfil/perfil.service';
import { AuthService, StatusAuthenticated, StatusAuthenticating } from '../authentication.service';
import { agenciasAlojamiento, authUsers } from '../data';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {
  public authService = inject(AuthService);
  public perfilService = inject(PerfilService);
  public router = inject(Router);


  constructor() {
    this.authService.statusAuthenticating.set(StatusAuthenticating.login);
  }

  public formBuilder = inject(FormBuilder);

  // NOTE : FORMULARIO de INICIO SESION
  public myFormLogin: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  procesarFormularioLogin() {
    const email = this.myFormLogin.controls['email'].value;
    const password = this.myFormLogin.controls['password'].value;
    authUsers.forEach((user) => {
      if (user.email == email && user.password == password) {
        if (user.rol == 'viajero') {
          this.authService.statusAuthenticated.set(StatusAuthenticated.viajero);
          this.router.navigate(['/home/page-alojamiento']);
        } else {
          this.authService.statusAuthenticated.set(StatusAuthenticated.agenciaAlojamiento);
          this.perfilService.updateStatusPerfil(PerfilStatus.Ver);
          this.perfilService.updateAgenciaAlojamiento(agenciasAlojamiento[0]);
          this.router.navigate(['/']);
          // this.router.navigate(['/dashboard/perfil']);

        }
        this.authService.userAuth.set(user);
        return;
      }
    });
    // NOTE : ENVIAR DATOS AL SERVER DE LOGIN
  }
}
