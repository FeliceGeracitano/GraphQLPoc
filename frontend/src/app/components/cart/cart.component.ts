import { Component, OnInit, OnDestroy } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Subscription } from 'rxjs/Subscription';

interface product {
    id?: number;
    name?: number;
    description?: string;
    qty?: number
}

const CartQuery = gql`
  query allPosts {
    cart {
      total
      description
      currency
      products {
        id
        name
        description
        qty
      }
    }
  }
`;
@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartSubscription: Subscription;
  loading = true;
  total = 0;
  description = '';
  currency: string;
  products: Array<product> = [];

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.cartSubscription = this.apollo.watchQuery({
      query: CartQuery
    }).subscribe(({data, loading}: any) => {
      Object.assign(this, data.cart);
      this.loading = loading;
    });
  }

  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
  }
}
