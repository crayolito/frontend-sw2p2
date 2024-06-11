import { Injectable, signal } from '@angular/core';

export class Oferta {
  id: string;
  titulo: string;
  precio: number;
  descuento: number;
  imagen: string;
  cantidad_camas: number;
  descripcionServicios: string;
  tipoHabitaciones: string[];
  estado: string;


  constructor(id: string, titulo: string, precio: number, descuento: number, imagen: string, cantidad_camas: number, descripcionServicios: string, tipoHabitaciones: string[], estado: string) {
    this.id = id;
    this.titulo = titulo;
    this.precio = precio;
    this.descuento = descuento;
    this.imagen = imagen;
    this.cantidad_camas = cantidad_camas;
    this.descripcionServicios = descripcionServicios;
    this.tipoHabitaciones = tipoHabitaciones;
    this.estado = estado;
  };
};

export enum statusOffer { Crear, Editar, Ninguno }

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  // public statusOffer: statusOffer = statusOffer.Ninguno;
  // public useOffer: Oferta = new Oferta('', '', 0, 0, '', 0, '', []);
  public statusOffer = signal<statusOffer>(statusOffer.Crear);
  public objectOffer = signal<Oferta>(
    new Oferta('', '', 0, 0, '', 0, '', [], '')
  );
  constructor() { }
}
