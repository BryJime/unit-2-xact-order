package com.example.java_spring_boot_back_end_app.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
public class CptCode {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String code;

    @OneToMany(mappedBy = "cptCode", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonBackReference("cpt-exams")
    private final List<Exam> exams = new ArrayList<>();

    public CptCode() {
    }

    public CptCode(Integer id, String cptCode) {
        this.id = id;
        this.code = cptCode;
    }

    public CptCode(String cptCode) {
        this.code = cptCode;
    }


    public Integer getId() {
        return id;
    }

    public String getCptCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public List<Exam> getExams() {
        return exams;
    }

    @Override
    public String toString() {
        return code;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass())
            return false;
        CptCode cptCode = (CptCode) o;
        return Objects.equals(id, cptCode.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }
}
