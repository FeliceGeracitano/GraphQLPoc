import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartRestComponent } from './components/cart-rest/cart-rest.component'
import { CartGraphqlComponent } from './components/cart-graphql/cart-graphql.component'
import { CartGraphlFragmentComponent } from './components/cart-graphql-fragment/cart-graphl-fragment.component'


const appRoutes: Routes = [
  {
    path: 'rest',
    component: CartRestComponent
  },
  {
    path: 'graphql',
    component: CartGraphqlComponent
  },
  {
    path: 'graphqlmore',
    component: CartGraphlFragmentComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }