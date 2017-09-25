import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule , ReactiveFormsModule} from "@angular/forms"
import { CustomerComponent } from '../../Component/customer/customer.component';
//import { GridComponent } from '../Component/GridComponent';
import { RouterModule } from '@angular/router';
import { CustomerRoutes } from './routing';
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import {CustomerApiService} from "../../Api/CustomerApi"
import { HttpModule } from '@angular/http';
@NgModule({
imports: [RouterModule.forChild(CustomerRoutes),
InMemoryWebApiModule.forRoot(CustomerApiService),
CommonModule,ReactiveFormsModule,
FormsModule,HttpModule],
declarations: [CustomerComponent
  //,GridComponent
  ],
bootstrap: [CustomerComponent]
})
export class CustomerModuleLibrary { }
