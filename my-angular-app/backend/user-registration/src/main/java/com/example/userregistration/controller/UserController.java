// UserController.java
package com.example.userregistration.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200") 
@RestController
@RequestMapping("/api/users")
public class UserController {

    // Define a simple User class inside the UserController for demonstration
    private static class User {
        private String username;
        private String email; // added for example only
        private String password; // added for example only

        // Constructors, getters, and setters
        public User() {}

        // Assume getters and setters are here for simplicity
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        System.out.println("Registering user: " + user.username);
        // Instead of just a string, wrap the response message in a Map or a POJO that will be automatically serialized to JSON
        Map<String, Object> response = new HashMap<>();
        response.put("message", "User registered successfully");
        return ResponseEntity.ok(response); // This will be serialized to JSON
    }
}

