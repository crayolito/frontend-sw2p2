import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Oferta, OfferService, statusOffer } from '../offer/offer.service';
import { OffersListService } from './offers-list.service';

@Component({
  selector: 'app-offers-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './offers-list.component.html',
  styleUrl: './offers-list.component.css',
})
export default class OffersListComponent {
  public offerService = inject(OfferService);
  public offersListService = inject(OffersListService);

  public viewOfertasLista = this.offersListService.ofertaLista.slice(0, 7);




  crearOferta(): void {
    this.offerService.statusOffer.set(statusOffer.Crear);
  }

  editarOferta(oferta: Oferta): void {
    this.offerService.statusOffer.set(statusOffer.Editar);
    this.offerService.objectOffer.set(oferta);
  }

  nextElementos(): void {
    let limite = (this.offersListService.ofertaLista.length - 1) + 7;
    let elementoFinal = this.viewOfertasLista[this.viewOfertasLista.length - 1];
    let index = this.offersListService.ofertaLista.indexOf(elementoFinal);
    if ((index) + 7 >= limite) return;
    this.viewOfertasLista = this.offersListService.ofertaLista.slice(index + 1, (index + 1) + 7);
  }

  backElementos(): void {
    let limite = 0;
    let elementoInial = this.viewOfertasLista[0];
    let index = this.offersListService.ofertaLista.indexOf(elementoInial);
    if (!((index + 1) - 7 > limite)) return;
    this.viewOfertasLista = this.offersListService.ofertaLista.slice(index - 7, index);
  }
}
