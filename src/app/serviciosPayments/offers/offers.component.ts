import { Component, inject } from '@angular/core';
import { PaymentStripeService } from '../../services/payment-stripe.service';

class Subcripcion {
  titulo: string;
  icono: string;
  descripcion: string;
  caracteristicas: string[];

  constructor(titulo: string, icono: string, descripcion: string, caracteristicas: string[]) {
    this.titulo = titulo;
    this.icono = icono;
    this.descripcion = descripcion;
    this.caracteristicas = caracteristicas;
  }
}

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export default class OffersComponent {
  public  paymentStripeService = inject(PaymentStripeService);
  supcricion1: Subcripcion = new Subcripcion(
    "Free",
    "assets/gratis.svg",
    "Accede a información detallada sobre viajes,alojamientos y atracciones turísticas sin costo alguno.",
    [
      "Información completa sobre destinos turísticos.",
      "Detalles de alojamientos (moteles y hoteles).",
      "Guía de atracciones turísticas.",
      "Herramientas avanzadas de búsqueda y filtrado."
    ]
  );

  supcricion2: Subcripcion = new Subcripcion(
    "Premium 25$/mes",
    "assets/subcripcion.svg",
    "Publica y promociona tus servicios en una categoría: alojamientos, aerolíneas o atracciones turísticas. Ideal para aumentar tu visibilidad.",
    [
      "Publica hasta 100 servicios u ofertas en una categoría a elegir.",
      "Informes sobre el rendimiento de tus publicaciones.",
      "Soporte prioritario y asistencia personalizada.",
      "Panel de control para información clave para mejorar tus decisiones"
    ]
  );

  supcricion3: Subcripcion = new Subcripcion(
    "On-Primeses $400",
    "assets/on-premises.svg",
    "Solución de software local para alojamientos. Gestiona todas tus operaciones desde tus propios servidores.",
    [
      "Instalación local mediante Docker.",
      "Registro Veloz",
      "Importación Eficiente.",
      "Operaciones Optimizadas.",
      "Panel de control para información clave para mejorar tus decisiones"
    ]
  );

  supcripciones: Subcripcion[] = [
    this.supcricion1,
    this.supcricion2,
    this.supcricion3
  ];

}
