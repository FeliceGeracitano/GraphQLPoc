import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

interface Product {
  id?: number;
  name?: number;
  description?: string;
  qty?: number;
}

interface Cart {
  description?: string;
  currency?: string;
  total?: number;
   products?: Array<Product>
}

@Component({
  selector: 'cart-rest',
  templateUrl: './cart-rest.component.html',
  styleUrls: ['./cart-rest.component.css'],
})
export class CartRestComponent implements OnInit {

  cart: Cart = {};
  products: Array<Product>;
  productImages: any;
  constructor(private http: Http) {}

  ngOnInit() {

    this.http.get('http://localhost:8000/cart')
      .map(res => res.json())
      .map(cart => { this.cart = cart; return cart })
      .map(cart => cart.products.map(product => product.id))
      .switchMap(ids => this.http.get('http://localhost:8000/products?products=' + ids.join(',')))
      .map(res => res.json())
      .map(products => products.map(prod => ({
        ...prod,
        qty: this.cart.products.find(cartProd => cartProd.id === prod.id).qty
      })))
      .map(products => { this.products = products; return products })
      .map(products => products.map(product => product.productImagesId))
      .switchMap(ids => this.http.get('http://localhost:8000/productsImages?ids=' + ids.join(',')))
      .map(res => res.json())
      .map(productImages => { this.productImages = productImages; })
      .subscribe(data => {});

  }

}
