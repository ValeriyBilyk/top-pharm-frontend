import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersPageComponent } from './orders-page/orders-page.component';
import { OrderFormPageComponent } from './order-form-page/order-form-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderService } from './order.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    OrdersPageComponent,
    OrderFormPageComponent
  ],
  providers: [
    OrderService
  ]
})
export class OrderModule { }
