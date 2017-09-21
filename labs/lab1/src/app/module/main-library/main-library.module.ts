import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms"
import { CustomerComponent } from '../../component/customer/customer.component';
import { MasterPageComponent } from '../../component/master-page/master-page.component';
import {SupplierComponent}from '../../component/supplier/supplier.component'
import {WelcomeComponent}from '../../component/welcome/welcome.component'

import {RouterModule,Routes} from '@angular/router'
import {ApplicationRoutes} from './routing'


@NgModule({
  imports: [RouterModule.forRoot(ApplicationRoutes),
            BrowserModule,
            FormsModule
            ],
  declarations: [MasterPageComponent,
                CustomerComponent,
                SupplierComponent,
                WelcomeComponent],
  bootstrap: [MasterPageComponent]
}) 
export class MainLibraryModule { }
