package com.example.java_spring_boot_back_end_app.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
public class Views {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    @OneToMany(mappedBy = "views", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonBackReference("views-exams")
    private final List<Exam> exams = new ArrayList<>();

    public Views() {
    }

    public Views(Integer id, String name) {
        this.id = id;
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Exam> getExams() {
        return exams;
    }

    @Override
    public String toString() {
        return name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass())
            return false;
        Views views = (Views) o;
        return Objects.equals(id, views.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }
}
