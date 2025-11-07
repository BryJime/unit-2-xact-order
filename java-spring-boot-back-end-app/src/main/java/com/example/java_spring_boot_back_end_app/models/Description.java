package com.example.java_spring_boot_back_end_app.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
public class Description {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(columnDefinition = "TEXT")
    private String text;

    @OneToMany(mappedBy = "description", cascade = jakarta.persistence.CascadeType.ALL, orphanRemoval = true)
    @JsonBackReference("description-exams")
    private final List<Exam> exams = new ArrayList<>();

    public Description() {
    }

    public Description(Integer id, String text) {
        this.id = id;
        this.text = text;
    }

    public Description(String description) {
        this.text = description;
    }

    public Integer getId() {
        return id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public List<Exam> getExams() {
        return exams;
    }

    @Override
    public String toString() {
        return text;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass())
            return false;
        Description description = (Description) o;
        return Objects.equals(id, description.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }
}
