import { Injectable, signal } from '@angular/core';

export enum PerfilStatus { Ver, Editar }

export class AgenciaAlojamiento {
  id: number;
  nombreEmpresa: string;
  owner: string;
  imagen: string;
  horarioAtencion: string;
  nroAtencion: number;
  ubicacionCoordenadas: string;
  ubicacionDescriptiva: string;
  cantidadEstrellas: number;
  serviciosGenerales: string;
  tipoHabitaciones: string[];
  instagram: string;
  facebook: string;
  web: string;

  constructor(
    id: number,
    nombreEmpresa: string,
    owner: string,
    imagen: string,
    horarioAtencion: string,
    nroAtencion: number,
    ubicacionCoordenadas: string,
    ubicacionDescriptiva: string,
    cantidadEstrellas: number,
    serviciosGenerales: string,
    tipoHabitaciones: string[],
    instagram: string,
    facebook: string,
    web: string
  ) {
    this.id = id;
    this.nombreEmpresa = nombreEmpresa;
    this.owner = owner;
    this.imagen = imagen;
    this.horarioAtencion = horarioAtencion;
    this.nroAtencion = nroAtencion;
    this.ubicacionCoordenadas = ubicacionCoordenadas;
    this.ubicacionDescriptiva = ubicacionDescriptiva;
    this.cantidadEstrellas = cantidadEstrellas;
    this.serviciosGenerales = serviciosGenerales;
    this.tipoHabitaciones = tipoHabitaciones;
    this.instagram = instagram;
    this.facebook = facebook;
    this.web = web;
  }
}

@Injectable({
  providedIn: 'root',
})
export class PerfilService {
  public statusPerfil = signal<PerfilStatus>(PerfilStatus.Ver);
  public agenciaAlojamiento = signal<AgenciaAlojamiento>(new AgenciaAlojamiento(
    0, '', '', '', '', 0, '', '', 0, '', [], '', '', ''));
  public desayunoIncluido = signal<boolean>(false);

  updateAgenciaAlojamiento(agencia: AgenciaAlojamiento) {
    this.agenciaAlojamiento.set(agencia);
    let str1 = "Desayuno incluido";
    let str2 = agencia.serviciosGenerales;
    let resultado = str2.toLowerCase().includes(str1.toLowerCase());
    console.log(resultado);
    this.desayunoIncluido.set(resultado);
  }

  getAgenciaAlojamiento(): AgenciaAlojamiento {
    return this.agenciaAlojamiento();
  }

  updateStatusPerfil(status: PerfilStatus) {
    this.statusPerfil.set(status);
  }

  constructor() { }
}
