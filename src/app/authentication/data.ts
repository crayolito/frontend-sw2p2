import { AgenciaAlojamiento } from "../dashboard/pages/perfil/perfil.service";
import { AuthUser } from "./authentication.service";

export const authUsers: AuthUser[] = [
  new AuthUser(1, 'juan.perez@gmail.com', 'clave123', 'viajero'),
  new AuthUser(2, 'maria.lopez@gmail.com', 'clave123', 'viajero'),
  new AuthUser(3, 'carlos.martinez@gmail.com', 'clave123', 'viajero'),
  new AuthUser(4, 'laura.gonzalez@gmail.com', 'clave123', 'viajero'),
  new AuthUser(5, 'diego.fernandez@gmail.com', 'clave123', 'viajero'),
  new AuthUser(6, 'ana.rodriguez@gmail.com', 'clave123', 'viajero'),
  new AuthUser(7, 'martin.garcia@gmail.com', 'clave123', 'viajero'),
  new AuthUser(8, 'luis.morales@gmail.com', 'clave123', 'viajero'),
  new AuthUser(9, 'sofia.ramirez@gmail.com', 'clave123', 'viajero'),
  new AuthUser(10, 'pedro.mendez@gmail.com', 'clave123', 'viajero'),
  new AuthUser(11, 'agencia1@alojamiento.com', 'clave123', 'agenciaAlojamiento'),
  new AuthUser(12, 'agencia2@alojamiento.com', 'clave123', 'agenciaAlojamiento'),
  new AuthUser(13, 'agencia3@alojamiento.com', 'clave123', 'agenciaAlojamiento'),
  new AuthUser(14, 'agencia4@alojamiento.com', 'clave123', 'agenciaAlojamiento'),
  new AuthUser(15, 'agencia5@alojamiento.com', 'clave123', 'agenciaAlojamiento')
];



export const agenciasAlojamiento: AgenciaAlojamiento[] = [
  new AgenciaAlojamiento(
    1,
    'Hotel Estrella Mar',
    'Luis García',
    'https://i.pinimg.com/564x/7a/a1/94/7aa19415266b8ad0ad570b7d2ecc3e8e.jpg',
    '24 horas',
    5551234567,
    '-17.3935,-66.1570',
    'Av. Ballivián 1234, Cochabamba, Bolivia',
    5,
    'Piscina, Wi-Fi gratuito, Desayuno Incluido, Estacionamiento, Gimnasio, Restaurante',
    [
      'Habitación Individual Estandar',
      'Habitación Doble Estandar',
      'Habitación Triple Estandar',
      'Habitación Suite Junior',
      'Habitación Individual Estandar',
      'Habitación Doble Estandar',
      'Habitación Triple Estandar',
      'Habitación Individual Superior',
      'Habitación Doble Superior',
      'Habitación Triple Superior',
    ],
    'https://www.instagram.com/bookingcom/',
    'https://www.facebook.com/bookingcom',
    'https://www.booking.com/index.es.html?aid=2311236'
  ),
  new AgenciaAlojamiento(
    2,
    'Hostal Los Andes',
    'María Pérez',
    'https://i.pinimg.com/564x/6b/61/9b/6b619b18f89bcdceec7e223c28e99f8e.jpg',
    '06:00 - 23:00',
    5552345678,
    '-16.4090,-71.5375',
    'Calle Mercaderes 123, Arequipa, Perú',
    4,
    'Wi-Fi gratuito, Desayuno Incluido, Estacionamiento, Restaurante, Ascensor, Servicio Habitación',
    [
      'Habitación Doble Superior',
      'Habitación Triple Superior',
      'Habitación Suite Execuite',
      'Habitación Cama Queen',
      'Habitación Estudio'
    ],
    'https://www.instagram.com/bookingcom/',
    'https://www.facebook.com/bookingcom',
    'https://www.booking.com/index.es.html?aid=2311236'
  ),
  new AgenciaAlojamiento(
    3,
    'Eco Lodge Titicaca',
    'José Fernández',
    'https://example.com/imagen3.jpg',
    '07:00 - 22:00',
    5553456789,
    '-15.8402,-69.3506',
    'Isla del Sol, Lago Titicaca, Bolivia',
    4,
    'Piscina, Wi-Fi gratuito, Desayuno Incluido, Admiten Mascotas, Bar, Zona Diversión',
    [
      'Habitación Individual Deluxe',
      'Habitación Doble Deluxe',
      'Habitación Triple Deluxe',
      'Habitación Suite Junior',
      'Habitación Cuádruple'
    ],
    'https://www.instagram.com/bookingcom/',
    'https://www.facebook.com/bookingcom',
    'https://www.booking.com/index.es.html?aid=2311236'
  ),
  new AgenciaAlojamiento(
    4,
    'Hotel Camino Real',
    'Ana Rodríguez',
    'https://example.com/imagen4.jpg',
    '24 horas',
    5554567890,
    '-19.5723,-65.7550',
    'Av. Hernando Siles 5432, Sucre, Bolivia',
    5,
    'Piscina, Wi-Fi gratuito, Desayuno Incluido, Spa y centro bienestar, Restaurante, Servicio Habitación',
    [
      'Habitación Individual Estandar',
      'Habitación Doble Estandar',
      'Habitación Triple Estandar',
      'Habitación Doble Superior',
      'Habitación Suite Execuite'
    ],
    'https://www.instagram.com/bookingcom/',
    'https://www.facebook.com/bookingcom',
    'https://www.booking.com/index.es.html?aid=2311236'
  ),
  new AgenciaAlojamiento(
    5,
    'Cusco Boutique Hotel',
    'Carlos Díaz',
    'https://example.com/imagen5.jpg',
    '05:00 - 24:00',
    5555678901,
    '-13.5167,-71.9781',
    'Calle Palacio 135, Cusco, Perú',
    4,
    'Piscina, Wi-Fi gratuito, Desayuno Incluido, Gimnasio, Restaurante, Traslado aeropuerto',
    [
      'Habitación Doble Deluxe',
      'Habitación Triple Deluxe',
      'Habitación Suite Junior',
      'Habitación Suite Execuite',
      'Habitación Doble Twin'
    ],
    'https://www.instagram.com/bookingcom/',
    'https://www.facebook.com/bookingcom',
    'https://www.booking.com/index.es.html?aid=2311236'
  )
];
