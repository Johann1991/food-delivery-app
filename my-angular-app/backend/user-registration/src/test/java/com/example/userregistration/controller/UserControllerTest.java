// UserControllerTest.java
package com.example.userregistration.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(UserController.class)
public class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    public void registerUser_ShouldReturnSuccessMessage() throws Exception {
        // Instantiating a new User object and setting its properties to simulate a new user registration.
        User user = new User();
        user.setUsername("testUser");
        user.setEmail("test@example.com");
        user.setPassword("password");

        mockMvc.perform(post("/api/users/register")
        .contentType(MediaType.APPLICATION_JSON)
        .content(objectMapper.writeValueAsString(user)))
        // Asserting that the response status is HTTP 200 OK.
        .andExpect(status().isOk())
        // Asserting that the JSON response has a "message" field with the value "User registered successfully".
        // jsonPath is used to inspect specific parts of the JSON response.
        .andExpect(jsonPath("$.message").value("User registered successfully"));
    }
}