import { Injectable, signal } from '@angular/core';

export enum HomeStatus { Alojamiento, Vuelos, AtraccionTurismo, none }




@Injectable({
  providedIn: 'root'
})
export class HomeService {
  public statusPage = signal<HomeStatus>(HomeStatus.Alojamiento);

  updateStatusPage(status: HomeStatus) {
    this.statusPage.set(status);
  }

  isAlojamiento(): boolean {
    return this.statusPage() == HomeStatus.Alojamiento;
  }

  isVuelos(): boolean {
    return this.statusPage() == HomeStatus.Vuelos;
  }

  isAtraccionTurismo(): boolean {
    return this.statusPage() == HomeStatus.AtraccionTurismo;
  }

  isNone(): boolean {
    return this.statusPage() == HomeStatus.none;
  }
}
