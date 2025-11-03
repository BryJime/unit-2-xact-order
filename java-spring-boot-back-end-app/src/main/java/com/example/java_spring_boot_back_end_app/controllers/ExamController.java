package com.example.java_spring_boot_back_end_app.controllers;

import com.example.java_spring_boot_back_end_app.dto.ExamDTO;
import com.example.java_spring_boot_back_end_app.models.*;
import com.example.java_spring_boot_back_end_app.repositories.*;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.resource.NoResourceFoundException;

import java.util.List;

@RestController
@RequestMapping("/exams")
public class ExamController {

    @Autowired
    ExamRepository examRepository;

    // repositories for related entities
    @Autowired
    AnatomyRepository anatomyRepository;

    @Autowired
    CptCodeRepository cptCodeRepository;

    @Autowired
    ViewsRepository viewsRepository;

    @Autowired
    DescriptionRepository descriptionRepository;

    @Autowired
    AliasRepository aliasRepository;

    @GetMapping(value = "/all", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getAllExams() {
        List<Exam> allExams = examRepository.findAll();
        return new ResponseEntity<>(allExams, HttpStatus.OK);
    }

    @GetMapping(value = "/details/{examId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getExamDetails(@PathVariable int examId) throws NoResourceFoundException {
        // Implementation for fetching exam details by examId
        Exam exam = examRepository.findById(examId).orElse(null);
        if (exam == null) {
            String path = "/exams/details/" + examId;
            throw new NoResourceFoundException(HttpMethod.GET, path);
        } else {
            return new ResponseEntity<>(exam, HttpStatus.OK);
        }
    }

    @PostMapping(value = "/add", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> addNewExam(@Valid @RequestBody ExamDTO examData) {
        return null;


    }



}
