import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApolloModule } from 'apollo-angular';
import { AppComponent } from './app.component';

import { CartGraphlFragmentComponent } from './components/cart-graphql-fragment/cart-graphl-fragment.component';
import { ProductComponent } from './components/product/product.component';

import { CartRestComponent } from './components/cart-rest/cart-rest.component';
import { CartGraphqlComponent } from './components/cart-graphql/cart-graphql.component';




import { provideClient } from './client';

@NgModule({
  declarations: [
    AppComponent,
    CartRestComponent,
    CartGraphqlComponent,
    CartGraphlFragmentComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    ApolloModule.forRoot(provideClient)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
