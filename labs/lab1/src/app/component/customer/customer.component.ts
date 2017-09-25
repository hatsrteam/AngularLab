import { Component, OnInit,Inject } from '@angular/core';
import {Customer} from '../../Model/Customer'

import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'customer-ui',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  CurrentCustomer:Customer = new Customer();
  Customers:Customer[];

  constructor(public http:Http){
     this.Display();
   }

  ngOnInit() {
     
  }

  Error(err) {
    console.debug(err);
  }
  Success(res) {
    this.Customers = res.json().data;
  }

  
  Display(){
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    var observable = this.http.get("api/customers", options);
    observable.subscribe(res => this.Success(res), res => this.Error(res));
  }

  Add(){
    
    let headers = new Headers({'Content-Type': 'application/json'});
    var cust:any = {};
    
    cust.CustomerCode = this.CurrentCustomer.CustomerCode;
    cust.CustomerName = this.CurrentCustomer.CustomerName;
    cust.CustomerAmount = this.CurrentCustomer.CustomerAmount;

    let options = new RequestOptions({ headers: headers });
    var observable = this.http.post("api/customers",cust, options);
      
    observable.subscribe(res => this.Success(res),res => this.Error(res));
    this.Display();
   
  }
}
