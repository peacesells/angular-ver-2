import { Component } from '@angular/core'

export class Product {
  constructor(
    public title: string,
    public price: number,
    public discription: string
  ) {}
}

@Component({
  selector: 'my-app',
  templateUrl: `./app.component.html`
})

export class AppComponent {
  Product: Product = new Product('', 0 , '')
  Products: Product[] = []
  companies: string[] = []

  addProduct() {
    this.Products.push(
      new Product(this.Product.title, this.Product.price, this.Product.discription)
    )
  }
}