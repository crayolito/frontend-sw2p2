import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Oferta } from '../../../dashboard/pages/offer/offer.service';
import { OffersListService } from '../../../dashboard/pages/offers-list/offers-list.service';
import { PerfilService } from '../../../dashboard/pages/perfil/perfil.service';
import { AlojamientoSBS, SearchBarService } from '../../components/search-bar/search-bar.service';

@Component({
  selector: 'app-search-result-alojamiento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-result-alojamiento.component.html',
  styleUrl: './search-result-alojamiento.component.css'
})
export default class SearchResultAlojamientoComponent implements OnInit {

  public offersListService = inject(OffersListService);
  public perfilService = inject(PerfilService);
  public dataEstanciaCliente: AlojamientoSBS | null = null;
  public searchBarService = inject(SearchBarService);
  public allOfertasLista: Oferta[] = this.offersListService.ofertaLista;
  public viewOfertasLista: Oferta[] = this.offersListService.ofertaLista.slice(0, 9);




  public categoriaAlojamiento: number[] = [1, 2, 3, 4, 5];

  public serviciosPopulares: string[] = [
    "Piscina",
    "Wi-Fi gratuito",
    "Desayuno Incluido",
    "Estacionamiento",
    "Admiten Mascotas",
    "Bar",
    "Gimnasio",
    "Restaurante",
    "Ascensor",
    "Servicio Habitación",
    "Traslado aeropuerto",
  ];

  public serviciosOtros: string[] = [
    "Sauna",
    "Spa y centro bienestar",
    "Plan de Tours",
    "Espacios Deportivos",
    "Zona Diversión",
    "Jardín",
    "Tienda de regalos",
    "Zona de barbacoa",
    "Terraza solárium",
  ];

  public serviciosHabitacion: string[] = [
    "Aire Acondicionado ",
    "Cocina",
    "Baño Privado",
    "Piscina Privada",
    "Lavadora",
    "Balcon ",
    "Nevera",
    "Terraza",
    "TV y WC",
    "Microondas",
    "Lavavajillas ",
    "Secador de Pelo",
    "Utensilios Cocina ",
    "Sofa ",
    "Minibar",
    "Cafetera y tetera",
  ];

  nextElementos(): void {
    // console.log(this.allOfertasLista.length);
    let limite = (this.allOfertasLista.length) + 9;
    let elementoFinal = this.viewOfertasLista[this.viewOfertasLista.length - 1];
    let index = this.allOfertasLista.indexOf(elementoFinal);
    if ((index + 1) + 9 >= limite) return;
    this.viewOfertasLista = this.allOfertasLista.slice(index + 1, (index + 1) + 9);
    // console.log({
    //   'a': this.viewOfertasLista.length,
    //   limite,
    //   elementoFinal,
    //   index,
    //   inicio: index + 1,
    //   fin: (index + 1) + 9,
    //   viewOfertasLista: this.viewOfertasLista
    // });
  }

  backElementos(): void {
    let limite = 0;
    let elementoInial = this.viewOfertasLista[0];
    let index = this.offersListService.ofertaLista.indexOf(elementoInial);
    if (!((index + 1) - 9 > limite)) return;
    this.viewOfertasLista = this.offersListService.ofertaLista.slice(index - 9, index);
  }

  desayunoIncluido(): boolean {
    return this.perfilService.desayunoIncluido();
  }

  ngOnInit(): void {
    this.dataEstanciaCliente = this.searchBarService.getDatosSearchBarAlojamiento();
  }
}


