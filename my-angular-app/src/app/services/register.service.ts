import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private baseUrl = "http://localhost:8080/api/users"; // Base URL for user-related API endpoints

  constructor(private http: HttpClient) { }

  // Method to register a user
  registerUser(user: any): Observable<any> {
    return this.http.post('${this.baseUrl}/register', user);
  }

}
