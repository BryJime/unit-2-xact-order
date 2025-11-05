package com.example.java_spring_boot_back_end_app.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
public class Alias {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    @OneToMany(mappedBy = "alias", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonBackReference("alias-exams")
    private final List<Exam> exams = new ArrayList<>();

    public Alias() {
    }

    public Alias(Integer id, String name) {
        this.id = id;
        this.name = name;
    }

    public Alias(String alias) {
        this.name = alias;
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
        Alias alias = (Alias) o;
        return Objects.equals(id, alias.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

}
