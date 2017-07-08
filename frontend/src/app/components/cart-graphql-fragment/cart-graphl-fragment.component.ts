import { Component, OnInit, OnDestroy } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Subscription } from 'rxjs/Subscription';

interface product {
  id?: number;
  name?: number;
  description?: string;
  qty?: number;
}

const CartQuery = gql`
  query allPosts {
    cart {
      total,
      description,
      currency
    }
  }
`;

const CartQueryWithProducts = gql`
  query allPosts {
    cart {
      total,
      description,
      currency,
      products {
        id,
        name,
        price,
        description,
        qty
      }
    }
  }
`;

@Component({
  selector: 'cart-graphql-fragment',
  templateUrl: './cart-graphl-fragment.component.html',
  styleUrls: ['./cart-graphl-fragment.component.css']
})
export class CartGraphlFragmentComponent implements OnInit {
  cartSubscription: Subscription;
  loading = true;
  total = 0;
  data: any;
  description = '';
  currency: string;
  products: Array<product> = [];
  toggleCharacter = '+';
  showBreakdown = false;
  query: any;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.performQuery(CartQuery);
  }

  performQuery(query) {
    this.data = this.apollo.watchQuery({
      query
    });
    this.cartSubscription && this.cartSubscription.unsubscribe();
    this.cartSubscription = this.data.subscribe(({ data, loading }: any) => {
      Object.assign(this, data.cart);
      this.loading = loading;
    });
  }

  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
  }

  toggleViewDropDown() {
    this.performQuery(CartQueryWithProducts);
    this.showBreakdown = !this.showBreakdown;
    this.toggleCharacter = this.showBreakdown ? '-' : '+';
/*    if (this.showBreakdown) {
      this.toggleCharacter = '-';
      this.data.refetch();
    } else {
      this.toggleCharacter = '+';
    }*/
  }
}
