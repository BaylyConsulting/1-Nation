import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Customer } from '../../../templates/customer';
import { CustomersService } from '../../../services/customers';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.html',
  styleUrls: ['./customer-list.css']
})
export class CustomerListComponent implements OnInit {
  router: Router;
  customer: Customer[] = [];
  constructor(_router: Router, private customersService : CustomersService){   
       this.router = _router;
   }

   nav(LOC:string) {
    this.router.navigateByUrl(LOC);
  }

  ngOnInit() {
    this.customersService.getAll();
  }

}
