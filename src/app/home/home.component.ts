import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HomeService, HomeStatus } from './servicio-home.service';



export class OptionNavegation {
  icono: string;
  titulo: string;
  ruta: string;

  constructor(icono: string, titulo: string, ruta: string) {
    this.icono = icono;
    this.titulo = titulo;
    this.ruta = ruta;
  }

}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, SearchBarComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {
  public homeService = inject(HomeService);
  public router = inject(Router);
  public titulo1 = signal("Encuentra tu proximo destino");
  public titulo2 = signal("Busca ofertas en hoteles, casa y mucho mas...");

  constructor() {
    // this.router.navigate(['/home/page-alojamiento']);
  }

  public opcionesHome: OptionNavegation[] = [
    new OptionNavegation(
      "assets/alojamiento.svg", "Alojamiento", "/home/page-alojamiento"
    ),
    new OptionNavegation(
      "assets/vuelo.svg", "Vuelos", "/home/page-vuelo"
    ),
    new OptionNavegation(
      "assets/atraccion-turistica.svg", "Atraccion Turisticas", "/home/page-turismo"
    ),
    new OptionNavegation(
      "assets/servicios.svg", "Servicios", "/home/service-offering"
    )
  ]



  isAlojamiento(): boolean {
    return this.homeService.isAlojamiento();
  }

  isVuelos(): boolean {
    return this.homeService.isVuelos();
  }

  isAtraccionTurismo(): boolean {
    return this.homeService.isAtraccionTurismo();
  }

  isNone(): boolean {
    return this.homeService.isNone();
  }

  redireccionarPage(value: string) {
    switch (value) {
      case "Alojamiento":
        this.router.navigate(['/home/page-alojamiento']);
        this.titulo1.set("Encuentra tu proximo destino");
        this.titulo2.set("Busca ofertas en hoteles, casa y mucho mas...");
        this.homeService.updateStatusPage(HomeStatus.Alojamiento);
        break;
      case "Vuelos":
        this.router.navigate(['/home/page-vuelo']);
        this.titulo1.set("Encuentra tu próximo vuelo");
        this.titulo2.set("Busca ofertas en vuelos entre Bolivia y Peru...");
        this.homeService.updateStatusPage(HomeStatus.Vuelos);
        break;
      case "Atraccion Turisticas":
        this.router.navigate(['/home/page-turismo']);
        this.titulo1.set("Actividades y Experiencias");
        this.titulo2.set("Descubre nuevas atracciones y experiencias en Bolivia y Peru...");
        this.homeService.updateStatusPage(HomeStatus.AtraccionTurismo);
        break;
      default:
        this.router.navigate(['/service-offering']);
        break;
    }
  }
}
