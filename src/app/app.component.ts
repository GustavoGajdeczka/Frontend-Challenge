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
  carts: any;
  valor: any;
  subtotal: number;
  frete: number;
  valorTotal: number;
  arrayId: any;

  constructor() {
    console.log(this.products);
    this.selectedDropdown = "Mais Populares";
    this.selectedProducts = 0;
  }

  public getProduct(product: any) {
    if (!this.carts) {
      this.carts = [product]
      this.arrayId = [product.id]
      this.selectedProducts++;
    } else {
      for (let index = 0; index < this.arrayId.length; index++) {
        if (this.arrayId[index] == product.id) {
          return null
        }
      }
      this.selectedProducts++;
      this.carts.push(product);
      this.arrayId.push(product.id);
    }
    console.log(this.arrayId);
    console.log(this.carts);
    this.subtotal = 0;
    this.frete = 0;
    this.valorTotal = 0;
    for (let index = 0; index < this.carts.length; index++) {
      this.valor = this.carts[index].price;
      this.subtotal += this.valor;
      if (this.subtotal < 250) {
        this.frete += 10;
      } else {
        this.frete = 0;
      }
      this.valorTotal = this.frete + this.subtotal
    }
    console.log(this.subtotal + "+" + this.valorTotal + "+" + this.frete)
  }

  public removeProducts(product) {
    for (let index = 0; index < this.carts.length; index++) {
      if (this.carts[index] == product) {
        this.arrayId.splice(index, 1);
        this.carts.splice(index, 1);
      }
    }
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
