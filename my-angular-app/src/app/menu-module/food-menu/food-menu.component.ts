// food-menu.components.ts
// Import necessary Angular core modules
import { Component } from '@angular/core'; 
import { CommonModule } from '@angular/common'; // Import CommonModule for common directives like *ngFor, *ngIf
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { FoodService } from '../../services/food.service';
import { DetailsModalComponent } from '../../modal-details/modal-details.component'
 
// @Component decorator to define metadata for the component
@Component({
  selector: 'app-food-menu',                        // Defines the custom HTML tag to use this component
  standalone: true,                                 // Indicates that the component is standalone, can be used without an enclosing module
  imports: [CommonModule, DetailsModalComponent],   // Import CommonModule needed for common Angular directives
  templateUrl: './food-menu.component.html',        // Path to the HTML template for this component
  styleUrls: ['./food-menu.component.css']          // Path to the CSS styles for this component
})

export class FoodMenuComponent {

  foodItems: any[] = [];
  selectedItem: any = null;

  constructor(private cartService: CartService, private router: Router, private foodService: FoodService){}

  ngOnInit() {
    this.foodService.getFoodItems().subscribe({
      next: (data) => {
        this.foodItems = data;
      },
      error: (err) => console.error('Failed to fetch food items:', err),
    });
  }

  onMarkAsFavorite(updateItem: any): void{
    // Update the local items list with the new favorite status
    const index = this.foodItems.findIndex(item => item.id === updateItem.id);
    if (index !== -1) {
      this.foodItems[index].isFavorite = updateItem.isFavorite;
    }
  }

  addToCart(item: any) {
    this.cartService.addItem(item);
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }
  
  // Function to show details of a food item. Currently, it shows an alert with the item's name.
  showDetails(item: any): void {
    this.selectedItem = item;
  }
}
