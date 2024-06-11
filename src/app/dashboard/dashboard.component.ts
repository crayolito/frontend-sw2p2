import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { OptionNavegation } from '../home/home.component';
import { DashboardService, DashboardStatus } from './servicio-dashboard.service';
import { AuthUser } from '../authentication/authentication.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export default class DashboardComponent {
  public dashboardService = inject(DashboardService);
  public router = inject(Router);

  public optionsDashboard: OptionNavegation[] = [
    new OptionNavegation(
      "assets/perfilEmpresa.svg", "Perfil", "/dashboard/perfil"
    ),
    new OptionNavegation(
      "assets/iconoOfertaServicio.svg", "Lista Ofertas", "/dashboard/offer"
    ),
    new OptionNavegation(
      "assets/payments.svg", "Pagos", "/dashboard/payment-list"
    ),
    new OptionNavegation(
      "assets/analisis.svg", "Analisis", "/dashboard/analisis-python"
    )
  ];

  informacionUsuario() : AuthUser {
    return this.dashboardService.informacionUsuario();
  }

  isPerfilCR() {
    return this.dashboardService.isPerfilCR();
  }

  isPayments() {
    return this.dashboardService.isPayments();
  }

  isOffersListCRUD() {
    return this.dashboardService.isOffersListCRUD();
  }

  isOfferCR() {
    return this.dashboardService.isOfferCR();
  }

  redireccionarPage(value: string, ruta: string) {
    switch (value) {
      case "Ofertas":
        this.dashboardService.updateStatusDashboard(DashboardStatus.offersListCRUD);
        break;
      case "Perfil":
        this.dashboardService.updateStatusDashboard(DashboardStatus.perfilCR);
        break;
      case "Pagos":
        this.dashboardService.updateStatusDashboard(DashboardStatus.payments);
        break;
      case "Oferta":
        this.dashboardService.updateStatusDashboard(DashboardStatus.offerCR);
        break;
      default:
        break;
    }
    this.router.navigate([ruta]);
  }
}

