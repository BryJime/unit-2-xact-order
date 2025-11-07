package com.example.java_spring_boot_back_end_app.repositories;

import com.example.java_spring_boot_back_end_app.models.CptCode;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CptCodeRepository extends JpaRepository<CptCode, Integer> {
    Optional<CptCode> findByCode(String code);
}

