import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { FoodMenuComponent } from './menu-module/food-menu/food-menu.component';
import { ContactComponent } from './contact/contact.component';
import { RegistrationComponent } from './registration/registration.component'; // Import the registration component

export const routes: Routes = [
    { path: 'menu', component: FoodMenuComponent },
    { path: 'cart', component: CartComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'register', component: RegistrationComponent }, // Add this line
    { path: '', redirectTo: '/menu', pathMatch: 'full' }
];
