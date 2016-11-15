import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {CustomersService} from './services/customers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [CustomersService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  router: Router;
  isDarkTheme: boolean = false;
  title = '1 Nation';

  constructor(_router: Router){   
       this.router = _router;
   }

  nav(LOC:string) {
    this.router.navigateByUrl(LOC);
}

}
