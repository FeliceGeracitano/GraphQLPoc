import { Component, OnInit, OnDestroy } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs/Subscription';

interface product {
    id?: number;
    name?: number;
    description?: string;
    qty?: number
}

@Component({
  selector: 'cart-rest',
  templateUrl: './cart-rest.component.html',
  styleUrls: ['./cart-rest.component.css']
})
export class CartRestComponent implements OnInit {
  ngOnInit() {
  }
}
