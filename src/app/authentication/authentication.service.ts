import { Injectable, signal } from '@angular/core';

// NOTE: ESTADO CUANDO ESTA YA AUTENTICADO
export enum StatusAuthenticated { viajero, agenciaAerolinea, agenciaTurismo, agenciaAlojamiento, none }

// NOTE: ESTADO CUANDO ESTA EN EL PROCESO DE AUTENTICACION
export enum StatusAuthenticating { login, registro, none }

export class AuthUser {
  id: number;
  email: string;
  password: string;
  rol: string;

  constructor(id: number, email: string, password: string, rol: string) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.rol = rol;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public statusAuthenticated = signal<StatusAuthenticated>(StatusAuthenticated.none);
  public statusAuthenticating = signal<StatusAuthenticating>(StatusAuthenticating.none);
  // NOTE: DATOS USUARIO AUTENTICADO
  public userAuth = signal<AuthUser>(new AuthUser(0, "", "", ""));
  public confirmacionAuth = signal<boolean>(false);
  constructor() { }
}
