import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms"
import { CustomerComponent } from '../../component/customer/customer.component';

@NgModule({
  imports: [BrowserModule,
            FormsModule],
  declarations: [CustomerComponent],
  bootstrap: [CustomerComponent]
})
export class MainLibraryModule { }
