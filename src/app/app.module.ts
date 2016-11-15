//core imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

//application Imports
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//page imports
import { HomeComponent } from './components/home/home';
import { PageNotFoundComponent } from './components/pagenotfound/pagenotfound';

//Customer module
import { CustomerMainComponent } from './components/customers/main/customer-main';
import { CustomerListComponent } from './components/customers/list/customer-list';
import { CustomerDetailsComponent } from './components/customers/details/customer-details';

//directive imports
import { TestDirective } from './directives/test';

//pipe imports
import { SamplePipe } from './pipes/sample';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerMainComponent,
    CustomerListComponent,
    CustomerDetailsComponent,
    PageNotFoundComponent,
    TestDirective,
    SamplePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
