//app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule, Router } from '@angular/router';
import { BannerComponent } from './banner/banner/banner.component';
import { FoodMenuComponent } from './menu-module/food-menu/food-menu.component';
import { OrderStatusComponent } from './order-status/order-status.component';
import { CartComponent } from './cart/cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    RouterModule,
    BannerComponent, 
    FoodMenuComponent, 
    OrderStatusComponent,
    CartComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
  showMenu = true;

  constructor(private router: Router) {}

  // Toggles the view of our components
  toggleView() {
    this.showMenu = !this.showMenu;
    if (this.showMenu) {
      this.router.navigate(['/menu']);
    }
    else{
      this.router.navigate(['/cart']);
    }
  }

  public navigateToMenu() {
    this.router.navigate(['/menu']);
  }

  // This is to navigate to our contact page / routes
  public navigateToContact() {
    this.router.navigate(['/contact']);
  }

  // This navigates to the registration page / routes
  public navigateToRegister(){
    this.router.navigate(['/register']);
  }

}
