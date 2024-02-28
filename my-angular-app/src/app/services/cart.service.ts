import { Injectable } from '@angular/core';
import { FoodItem } from '../menu-module/food-menu/food-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

 private items: FoodItem[] = [];

  constructor() { }

  addItem(item: FoodItem) {
    this.items.push(item);
  }

  getItems(): FoodItem[] {
    return this.items;
  }
}
