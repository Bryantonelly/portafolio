import { trigger, transition, style, animate } from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
transition('HomePage <=> AboutMePage', [
    style({ opacity: 0 }),
    animate('500ms ease-in-out', style({ opacity: 1 }))
  ]),
  transition('AboutMePage <=> SkillsPage', [
    style({ opacity: 0 }),
    animate('500ms ease-in-out', style({ opacity: 1 }))
  ]),
  transition('SkillsPage <=> ExperiencePage', [
    style({ opacity: 0 }),
    animate('500ms ease-in-out', style({ opacity: 1 }))
  ]),
  transition('ExperiencePage <=> ProjectsPage', [
    style({ opacity: 0 }),
    animate('500ms ease-in-out', style({ opacity: 1 }))
  ]),
  transition('* <=> NotFoundPage', [
    style({ opacity: 0 }),
    animate('300ms ease-out', style({ opacity: 1 }))
  ]),
  // Comportamiento por defecto para cualquier otra combinación
  transition('* <=> *', [
    style({ opacity: 0 }),
    animate('400ms ease-in-out', style({ opacity: 1 }))
  ])
]);
