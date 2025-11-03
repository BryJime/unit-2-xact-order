package com.example.java_spring_boot_back_end_app.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "exams")
public class Exam {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    private String region;

    private boolean isCommon;

    private boolean shortcut;

    @ManyToOne
    @JoinColumn(name = "cpt_id", referencedColumnName = "id")
    private CptCode cptCode;

    @ManyToOne
    @JoinColumn(name = "anatomy_id", referencedColumnName = "id")
    private Anatomy anatomy;

    @ManyToOne
    @JoinColumn(name = "views_id", referencedColumnName = "id")
    private Views views;

    @ManyToOne
    @JoinColumn(name = "description_id", referencedColumnName = "id")
    private Description description;

    @ManyToOne
    @JoinColumn(name = "alias_id", referencedColumnName = "id")
    private Alias alias;

    public Exam() {
    }

    public Exam(Integer id, String name, String region, boolean isCommon, boolean shortcut, CptCode cptCode, Anatomy anatomy, Views views, Description description, Alias alias) {
        this.id = id;
        this.name = name;
        this.region = region;
        this.isCommon = isCommon;
        this.shortcut = shortcut;
        this.cptCode = cptCode;
        this.anatomy = anatomy;
        this.views = views;
        this.description = description;
        this.alias = alias;
    }

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getRegion() {
        return region;
    }

    public boolean isCommon() {
        return isCommon;
    }

    public boolean isShortcut() {
        return shortcut;
    }

    public CptCode getCptCode() {
        return cptCode;
    }

    public Anatomy getAnatomy() {
        return anatomy;
    }

    public Views getViews() {
        return views;
    }

    public Description getDescription() {
        return description;
    }

    public Alias getAlias() {
        return alias;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public void setCommon(boolean common) {
        isCommon = common;
    }

    public void setShortcut(boolean shortcut) {
        this.shortcut = shortcut;
    }

    public void setCptCode(CptCode cptCode) {
        this.cptCode = cptCode;
    }

    public void setAnatomy(Anatomy anatomy) {
        this.anatomy = anatomy;
    }

    public void setViews(Views views) {
        this.views = views;
    }

    public void setDescription(Description description) {
        this.description = description;
    }

    public void setAlias(Alias alias) {
        this.alias = alias;
    }

    @Override
    public String toString() {
        return name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Exam)) return false;
        Exam exam = (Exam) o;
        return Objects.equals(id, exam.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }
}
