import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,


    BrowserModule,
    AppRoutingModule,

    ReactiveFormsModule,




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
