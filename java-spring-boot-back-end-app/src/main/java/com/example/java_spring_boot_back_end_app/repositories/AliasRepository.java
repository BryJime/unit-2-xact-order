package com.example.java_spring_boot_back_end_app.repositories;

import com.example.java_spring_boot_back_end_app.models.Alias;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AliasRepository extends JpaRepository<Alias, Integer> {
    Optional<Alias> findByName(String aliasName);
}

