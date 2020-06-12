import { Component } from '@angular/core';
import data from './products/products.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: any = data;
  selectedDropdown: string;
  selectedProducts: number;
  hover: boolean;

  constructor() {
    console.log(this.products);
    this.selectedDropdown = "Mais Populares";
    this.selectedProducts = 0;
  }

  public sortType(filter: string) {
    switch (filter) {
      case 'lessPrice':
        this.selectedDropdown = "Menos preço"
        return this.products.sort((a, b) => { return a.price - b.price })
        break;
      case 'score':
        this.selectedDropdown = "Mais Populares"
        this.products.sort((a, b) => { return a.score - b.score })
        return this.products.reverse((a, b) => { return a.score - b.score })
        break;
      case 'plusPrice':
        this.selectedDropdown = "Maior preço"
        this.products.sort((a, b) => { return a.price - b.price })
        return this.products.reverse((a, b) => { return a.price - b.price })
        break;
      case 'alfabetic':
        this.selectedDropdown = "Ordem alfabetica"
        return this.products.sort((a, b) => a.name.localeCompare(b.name))
        break;
    }
  }
}
