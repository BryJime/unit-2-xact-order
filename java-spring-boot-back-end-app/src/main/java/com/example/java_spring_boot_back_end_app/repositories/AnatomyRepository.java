package com.example.java_spring_boot_back_end_app.repositories;

import com.example.java_spring_boot_back_end_app.models.Anatomy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnatomyRepository extends JpaRepository<Anatomy, Integer> {
}
