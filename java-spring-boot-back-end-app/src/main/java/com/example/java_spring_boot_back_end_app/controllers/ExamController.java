package com.example.java_spring_boot_back_end_app.controllers;

import com.example.java_spring_boot_back_end_app.dto.ExamDTO;
import com.example.java_spring_boot_back_end_app.models.*;
import com.example.java_spring_boot_back_end_app.repositories.*;
import com.example.java_spring_boot_back_end_app.service.ExamService;
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

    @Autowired
    ExamService examService;

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

    @PutMapping(value = "/update/{examId}", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Exam> updateExam(@PathVariable int examId, @Valid @RequestBody ExamDTO examData) throws NoResourceFoundException {
        Exam existingExam = examService.updateExam(examId, examData);
        return new ResponseEntity<>(existingExam, HttpStatus.OK);


    }

    @PostMapping(value = "/add", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Exam> addNewExam(@Valid @RequestBody ExamDTO examData) {
        Exam exam = examService.createExam(examData);
        return ResponseEntity.status(HttpStatus.CREATED).body(exam);
    }

    @DeleteMapping(value = "/delete/{examId}")
    public ResponseEntity<?> deleteExam(@PathVariable int examId) throws NoResourceFoundException {
        Exam exam = examRepository.findById(examId).orElse(null);
        if (exam == null) {
            String path = "/exams/delete/" + examId;
            throw new NoResourceFoundException(HttpMethod.DELETE, path);
        } else {
            examRepository.deleteById(examId);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        }
    }



}
