import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApolloModule } from 'apollo-angular';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { CartGraphlFragmentComponent } from './components/cart-graphql-fragment/cart-graphl-fragment.component';
import { ProductComponent } from './components/product/product.component';
import { CartRestComponent } from './components/cart-rest/cart-rest.component';
import { CartGraphqlComponent } from './components/cart-graphql/cart-graphql.component';
import { provideClient } from './client';
import { AppRoutingModule } from './app-route.module';




@NgModule({
  declarations: [
    AppComponent,
    CartGraphqlComponent,
    CartGraphlFragmentComponent,
    CartRestComponent,
    ProductComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    ApolloModule.forRoot(provideClient)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
