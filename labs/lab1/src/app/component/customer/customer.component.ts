import { Component, OnInit } from '@angular/core';
import {Customer} from '../../Model/Customer'

@Component({
  selector: 'customer-ui',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  CurrentCustomer:Customer = new Customer();

  constructor() { }

  ngOnInit() {
  }

}
