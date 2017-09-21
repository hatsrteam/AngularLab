import {Component} from '@angular/core';
import { CustomerComponent } from '../../component/customer/customer.component';
import {SupplierComponent}from '../../component/supplier/supplier.component'
import {WelcomeComponent}from '../../component/welcome/welcome.component'

export const ApplicationRoutes =[
  { path: 'Customer', component: CustomerComponent },
  { path: 'Supplier', component: SupplierComponent },
  { path: '', component:WelcomeComponent }
];
