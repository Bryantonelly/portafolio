import { trigger, transition, style, animate } from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  transition('HomePage <=> AboutMePage', [
    style({ opacity: 0 }),
    animate('3s', style({ opacity: 1 })),
  ]),
  transition('* <=> NotFoundPage', [
    style({ opacity: 0 }),
    animate('0.5s', style({ opacity: 1 })),
  ]),
  // Agrega más transiciones según tus rutas
]);
