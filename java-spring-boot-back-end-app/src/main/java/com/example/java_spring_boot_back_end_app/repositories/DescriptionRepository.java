package com.example.java_spring_boot_back_end_app.repositories;

import com.example.java_spring_boot_back_end_app.models.Description;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DescriptionRepository extends JpaRepository<Description, Integer> {
    Optional<Description> findByText(String text);
}

