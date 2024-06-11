import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { map } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PaymentStripeService {
  private http = inject(HttpClient);
  private url = environment.apiUrl;
  private stripeKey = environment.stripeKey;
  constructor() { }


  createPaymentIntent() {
    return this.http
      .post(`${this.url}/create-checkout-session`, {
        items: [
          { id: 'sku_GBJ2Y6yQj3j3v1', name: 'Producto1', image: 'https://i.pinimg.com/564x/8a/59/a5/8a59a55cc8172276db222d9bf2c4dbee.jpg', quantity: 1 , amount : 2000},
          { id: 'sku_GBJ2Y6yQj3j3v2', name: 'Producto2', image: 'https://i.pinimg.com/564x/8a/59/a5/8a59a55cc8172276db222d9bf2c4dbee.jpg', quantity: 1 , amount : 3000},
          { id: 'sku_GBJ2Y6yQj3j3v3', name: 'Producto3', image: 'https://i.pinimg.com/564x/8a/59/a5/8a59a55cc8172276db222d9bf2c4dbee.jpg', quantity: 1 , amount : 4000},
          { id: 'sku_GBJ2Y6yQj3j3v4', name: 'Producto4', image: 'https://i.pinimg.com/564x/8a/59/a5/8a59a55cc8172276db222d9bf2c4dbee.jpg', quantity: 1 , amount : 5000},
        ]
      })
      .pipe(
        map(async (res: any) => {
          const stripe = await loadStripe("pk_test_51Llg7ZHb1HSfUUcZPlV4E72r8hfjvDrFyXqjsREKceBgOOFznC0KsonXvBlllLfT490qMFtOOVizw8J49g7u4g9p00aVMZ0OHe");
          stripe?.redirectToCheckout({ sessionId: res.id });
        })
      )
      .subscribe({
        error: (err) => console.error('Error', err),
      });
  }
}
