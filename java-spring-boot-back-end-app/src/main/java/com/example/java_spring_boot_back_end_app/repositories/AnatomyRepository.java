package com.example.java_spring_boot_back_end_app.repositories;

import com.example.java_spring_boot_back_end_app.models.Anatomy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AnatomyRepository extends JpaRepository<Anatomy, Integer> {
    Optional<Anatomy> findByName(String name);
}
