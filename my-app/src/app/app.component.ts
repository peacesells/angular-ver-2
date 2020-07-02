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
    <div class="col-xs-10">
      <div class="form-group">
        <label>Продукт</label>
        <input class="form-control" name="title" [(ngModel)]="Product.title" />
      </div>
      <div class="form-group">
        <label>Цена</label>
        <input
          type="number"
          class="form-control"
          name="price"
          [(ngModel)]="Product.price"
        />
      </div>
      <div class="form-group">
        <label>Описание</label>
        <input class="form-control" name="title" [(ngModel)]="Product.discription" />
      </div>
      <div class="form-group">
        <button class="btn btn-default" (click)="addProduct()">Добавить</button>
      </div>
    </div>
    <div>
      <h3>Добавленные элементы</h3>
      <ul *ngFor="let p of Products">
        <li>{{ p.title }} ({{ p.discription }}) - {{ p.price }}</li>
      </ul>
    </div>
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