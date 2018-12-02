import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss']
})
export class OrdersPageComponent implements OnInit {

  items;

  constructor(private ordersService: OrderService) { }

  ngOnInit() {
    this.ordersService.getUsersOrders().subscribe(orders => this.items = orders);
  }

}
