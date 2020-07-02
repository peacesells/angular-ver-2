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
  template: `
  <section class="content">
    <div class="col-xs-10">
      <div class="form-group">
        <label>Продукт</label>
        <input class="form-control" name="title" [(ngModel)]="Product.title" />
        <label>Цена</label>
        <input
          type="number"
          class="form-control"
          name="price"
          [(ngModel)]="Product.price"
        />
        <label>Описание</label>
        <input class="form-control" name="title" [(ngModel)]="Product.discription" />
        <button class="btn btn-default" (click)="addProduct()">Добавить</button>
      </div>
    </div>
    <div>
      <h3>Добавленные элементы</h3>
      <ul *ngFor="let p of Products">
        <li>{{ p.title }} ({{ p.discription }}) - {{ p.price }}</li>
      </ul>
    </div>
  </section>
  `
})
export class AppComponent {
  Product: Product = new Product('', 0, '')
  Products: Product[] = []
  companies: string[] = []

  addProduct() {
    this.Products.push(
      new Product(this.Product.title, this.Product.price, this.Product.discription)
    )
  }
}