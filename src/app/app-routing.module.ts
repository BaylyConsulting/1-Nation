import { NgModule }     from '@angular/core';
import { RouterModule, Router } from '@angular/router';


//page imports
import { HomeComponent } from './components/home/home';
import { PageNotFoundComponent } from './components/pagenotfound/pagenotfound';

//Customer module
import { CustomerMainComponent } from './components/customers/main/customer-main';
import { CustomerListComponent } from './components/customers/list/customer-list';
import { CustomerDetailsComponent } from './components/customers/details/customer-details';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent, data: {title: 'Welcome to Xpo Angular UI Demo Application'} },
      { path: 'customer/main', component: CustomerMainComponent, data: {title: 'Customer Main'} },
      { path: 'customer/list', component: CustomerListComponent, data: {title: 'Customer List'} },
      { path: 'customer/details/:id', component: CustomerDetailsComponent, data: {title: 'Customer Details'} },
      { path: '**', component: PageNotFoundComponent, data: {title: 'Page Not Found'}  }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
