import { Component } from '@angular/core';
import {Customer} from './Model/Customer'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  CurrentCustomer:Customer = new Customer();

  title = 'app';
}
