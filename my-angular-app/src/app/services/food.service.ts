// In food.service.ts

import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FoodService {

  getFoodItems(): Observable<any[]> {
    return from(fetch('https://run.mocky.io/v3/18d9df89-7552-44b6-8709-5bdfe87bd5c4')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      }))
      .pipe(
        map(data => data.foodItems) // Extracting the foodItems array from the response
      );
  }
}
