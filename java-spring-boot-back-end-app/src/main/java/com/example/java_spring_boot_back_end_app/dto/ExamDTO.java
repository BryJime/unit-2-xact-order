package com.example.java_spring_boot_back_end_app.dto;

import com.example.java_spring_boot_back_end_app.models.Anatomy;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.util.List;

public class ExamDTO {


    @NotBlank(message = "Exam name is mandatory")
    @Size(min = 1, max = 150, message = "Exam name must be between 1 and 150 characters")
    private String name;

    @NotBlank(message = "Views are mandatory")
    @Size(min = 1 , max = 150, message = "Views must be between 1 and 150 characters")
    private String views;

    private String cptCode;

    private String description;

    private String anatomy;

    @NotBlank(message = "Must provide an alias")
    @Size(min = 1, max = 100, message = "Alias must be between 1 and 100 characters")
    private String alias;

    @NotBlank(message = "Region is mandatory")
    @Size(min = 1, max = 100, message = "Region must be between 1 and 100 characters")
    private String region;

    private boolean isCommon;

    private boolean isShortcut;

    public ExamDTO(String name, String views, String cptCode, String description, String anatomy, String alias, String region, boolean isCommon, boolean isShortcut) {
        this.name = name;
        this.views = views;
        this.cptCode = cptCode;
        this.description = description;
        this.anatomy = anatomy;
        this.alias = alias;
        this.region = region;
        this.isCommon = isCommon;
        this.isShortcut = isShortcut;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getViews() {
        return views;
    }

    public void setViews(String views) {
        this.views = views;
    }

    public String getCptCode() {
        return cptCode;
    }

    public void setCptCode(String cptCode) {
        this.cptCode = cptCode;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAlias() {
        return alias;
    }

    public void setAlias(String alias) {
        this.alias = alias;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public boolean getIsCommon() {
        return isCommon;
    }

    public void setIsCommon(boolean isCommon) {
        this.isCommon = isCommon;
    }

    public boolean getIsShortcut() {
        return isShortcut;
    }

    public void setIsShortcut(boolean isShortcut) {
        this.isShortcut = isShortcut;
    }

    public String getAnatomy() {
        return anatomy;
    }

    public void setAnatomy(String anatomy) {
        this.anatomy = anatomy;
    }
}
