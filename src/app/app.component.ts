import { Component } from '@angular/core';
import data from './products/products.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: any = data;
  constructor() {
    console.log(this.products);
  }
}
