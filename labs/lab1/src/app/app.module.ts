import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CustomerComponent} from './component/customer/customer.component'
import { MainLibraryModule } from './module/main-library/main-library.module';
import { MasterPageComponent } from './Component/master-page/master-page.component';
import { SupplierComponent } from './Component/supplier/supplier.component';
import { WelcomeComponent } from './Component/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    MasterPageComponent,
    SupplierComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
