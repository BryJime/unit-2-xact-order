package com.example.java_spring_boot_back_end_app.controllers;

import com.example.java_spring_boot_back_end_app.dto.request.LoginRequestDTO;
import com.example.java_spring_boot_back_end_app.dto.response.JwtResponseDTO;
import com.example.java_spring_boot_back_end_app.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("admin/login")
public class LoginController {

    @Autowired
    public JwtService jwtService;

    @Value("${admin.username}")
    private String adminUsername;

    @Value("${admin.password}")
    private String adminPassword;

    @PostMapping("/login")
    private ResponseEntity<?> login (@RequestBody LoginRequestDTO request) {

        if (!request.getUsername().equals(adminUsername)) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }

        if (!new BCryptPasswordEncoder().matches(request.getPassword(), adminPassword)) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }

        String token = jwtService.generateToken(request.getUsername());

        return ResponseEntity.ok(new JwtResponseDTO(token));

    };



}
