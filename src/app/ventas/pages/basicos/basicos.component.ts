import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'miguel';
  nombreUpper: string = 'MIGUEL';
  nombreCompleto: string = 'mIgueL yUste';

  fecha: Date = new Date();

}
