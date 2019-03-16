import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  url : string ="http://localhost:3000/customers/";
  constructor(private http: Http) { }

  addCustomer(customer)
  {
    return this.http.post(this.url,customer)
        .map((response : any)=>response)
  }

  getCustomer(id) : Observable<any>
  {
    return this.http.get(this.url+id)
            .map((response : any)=>response)
  }
  
}
