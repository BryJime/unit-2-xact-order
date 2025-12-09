package com.example.java_spring_boot_back_end_app.dto.response;

public class JwtResponseDTO {

    public String token;

    public JwtResponseDTO(String token) {
        this.token = token;
    }
}
