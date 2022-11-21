import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  // i18nSelect
  nombre: string = 'Miguel';
  genero: string = 'masculino';
  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  // i18nPlural
  clientes: string[] = ['Miguel', 'María', 'Pedro', 'Juan', 'Félix'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    other: 'tenemos # clientes esperando',
  };

  cambiarCliente() {
    if (this.nombre === 'Miguel') {
      this.nombre = 'Susana';
      this.genero = 'femenino';
    } else {
      this.nombre = 'Miguel';
      this.genero = 'masculino';
    }
  }

  sumarCliente() {
    this.clientes.push('cliente');
  }

  restarCliente() {
    this.clientes.pop();
  }
}
