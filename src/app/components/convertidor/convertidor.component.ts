import { Component } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent {
  cantidad = 0;
  origen = 'USD';
  destino = 'MXN';
  total = 0;
  monedas: string[] = ['MXN', 'EUR', 'USD'];

  constructor() {}

  operacion(): void {
    if(this.origen === this.destino)
        this.total = this.cantidad;
    else
        this.total = this.cantidad * Math.random();
  }

  convertir(): void {
    switch(this.origen) {
      case 'USD':
        this.operacion()
        break;
      case 'EUR':
        this.operacion()
        break;
      case 'MXN':
        this.operacion()
        break;
    }
    
  }

  ngOnInit(): void {

  }

}
