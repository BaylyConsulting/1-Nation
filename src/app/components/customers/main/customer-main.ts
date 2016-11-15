import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-customer-main',
  templateUrl: './customer-main.html',
  styleUrls: ['./customer-main.css']
})
export class CustomerMainComponent implements OnInit {
  router: Router;
  constructor(_router: Router){   
       this.router = _router;
   }

   nav(LOC:string) {
    this.router.navigateByUrl(LOC);
  }

  ngOnInit() {
  }

}
