import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FoodItem } from '../menu-module/food-menu/food-item.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  items: FoodItem[] =[];
  total =0;

  constructor(private cartService: CartService){}

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.total = this.items.reduce((acc, item) => acc + item.price, 0);
  }
}
