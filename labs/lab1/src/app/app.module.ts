import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CustomerComponent} from './component/customer/customer.component'
import { MainLibraryModule } from './module/main-library/main-library.module';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
