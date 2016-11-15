import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Customer } from '../templates/Customer';

@Injectable()
export class CustomersService {

  constructor(private http : Http) { }

  getAll(): Observable<Customer[]>{
    let customer$:any;
    return customer$;
  }

}
