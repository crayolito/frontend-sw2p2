import { inject, Injectable, signal } from '@angular/core';
import { AuthService, AuthUser } from '../authentication/authentication.service';

// READ : CRUD (Create Read Update Delete)
export enum DashboardStatus { perfilCR, payments, offersListCRUD, offerCR }

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  public statusDashboard = signal<DashboardStatus>(DashboardStatus.perfilCR);
  public authService = inject(AuthService);

  informacionUsuario() : AuthUser {
    return this.authService.userAuth();
  }

  updateStatusDashboard(status: DashboardStatus) {
    this.statusDashboard.set(status);
  }

  isPerfilCR() {
    return this.statusDashboard() == DashboardStatus.perfilCR;
  }

  isPayments() {
    return this.statusDashboard() == DashboardStatus.payments;
  }

  isOffersListCRUD() {
    return this.statusDashboard() == DashboardStatus.offersListCRUD;
  }

  isOfferCR() {
    return this.statusDashboard() == DashboardStatus.offerCR;
  }

  constructor() { }
}
