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
    <div class="col-md-6">
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
        <textarea class="form-control" name="discription" [(ngModel)]="Product.discription" rows="3" cols="3"></textarea>
        <button class="btn btn-default" (click)="addProduct()">Добавить</button>
      </div>
    </div>
    <div class="col-md-6">
      <div class="product-list">
        <h3>Добавленные элементы</h3>
        <ul *ngFor="let p of Products" id="myList">
          <span onclick="this.parentNode.removeChild(this);" class="fa fa-trash"><li>{{ p.title }} {{ p.price }} руб - {{ p.discription }}</li></span>
        </ul>
      </div>
    </div>
  </section>
  `
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