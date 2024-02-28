// order-status.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from '../services/order.service'; // Import OrderService
import { LoggingService } from '../services/logging.service'; // Import LoggingService

@Component({
  selector: 'app-order-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class OrderStatusComponent implements OnInit {
  status: string = 'Loading...';

  constructor(private orderService: OrderService, private loggingService: LoggingService) {}

  ngOnInit() {
    this.status = this.orderService.getOrderStatus();
    this.loggingService.logInfo(`Order status loaded: ${this.status}`); // Use LoggingService
  }
}