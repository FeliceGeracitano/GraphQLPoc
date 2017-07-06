import { Component, Input } from '@angular/core';

export class Product {
  id: string
  qty: number
  name: string
  description: string
  price: number
}
@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {
  @Input() product: Product;
}
