import { trigger, transition, style, animate, state } from '@angular/animations';

 export let fade =  trigger('fade', [

    state('void', style({ transform: 'translateX(-20px)', opacity : 0 })),

    transition(':enter, :leave', [
      animate(2000)
    ])
  ]);