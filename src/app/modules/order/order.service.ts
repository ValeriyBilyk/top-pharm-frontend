import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) { }

  postOrder({body, params = {filters: {}}}) {

    return this.http.post(`http://localhost:3100/api/v1/drug-actions`, body, {params: params.filters}).pipe();
  }

  getOrders() {

    return this.http.get(`http://localhost:3100/api/v1/drug-actions`).pipe();
  }

  getUsersOrders() {

    return this.http.get(`http://localhost:3100/api/v1/users-orders`).pipe();
  }
}
