import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderPlacementComponent } from './order-placement/order-placement.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderListComponent,
    OrderPlacementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
