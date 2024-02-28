// order.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  // Simple function to return a static order status
  getOrderStatus(): string {
    return 'Processing'; // Static status
  }
}
