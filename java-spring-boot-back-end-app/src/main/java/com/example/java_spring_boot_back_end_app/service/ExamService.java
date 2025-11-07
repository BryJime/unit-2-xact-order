package com.example.java_spring_boot_back_end_app.service;

import com.example.java_spring_boot_back_end_app.dto.ExamDTO;
import com.example.java_spring_boot_back_end_app.models.*;
import com.example.java_spring_boot_back_end_app.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ExamService {

    @Autowired
    private ExamRepository examRepository;

    @Autowired
    private AnatomyRepository anatomyRepository;

    @Autowired
    private CptCodeRepository cptCodeRepository;

    @Autowired
    private ViewsRepository viewsRepository;

    @Autowired
    private DescriptionRepository descriptionRepository;

    @Autowired
    private AliasRepository aliasRepository;

    public Exam createExam(ExamDTO examDTO){

        Exam exam = new Exam();
        exam.setName(examDTO.getName());
        exam.setRegion(examDTO.getRegion());
        exam.setCommon(examDTO.getCommon());
        exam.setShortcut(examDTO.getShortcut());


        CptCode cpt = cptCodeRepository.findByCode(examDTO.getCptCode())
                .orElseGet(() -> cptCodeRepository.save(new CptCode(examDTO.getCptCode())));

        Anatomy anatomy = anatomyRepository.findByName(examDTO.getAnatomy())
                .orElseGet(() -> anatomyRepository.save(new Anatomy(examDTO.getAnatomy())));

        Views views = viewsRepository.findByName(examDTO.getViews())
                .orElseGet(() -> viewsRepository.save(new Views(examDTO.getViews())));

        Description description = descriptionRepository.findByText(examDTO.getDescription())
                .orElseGet(() -> descriptionRepository.save(new Description(examDTO.getDescription())));

        Alias alias = aliasRepository.findByName(examDTO.getAlias())
                .orElseGet(() -> aliasRepository.save(new Alias(examDTO.getAlias())));

        exam.setCptCode(cpt);
        exam.setAnatomy(anatomy);
        exam.setViews(views);
        exam.setDescription(description);
        exam.setAlias(alias);

        return examRepository.save(exam);

    }

    public Exam updateExam(Integer id, ExamDTO examDTO){

        Exam exam = examRepository.findById(id).orElseThrow(() -> new RuntimeException("Exam not found"));

        exam.setName(examDTO.getName());
        exam.setRegion(examDTO.getRegion());
        exam.setCommon(examDTO.getCommon());
        exam.setShortcut(examDTO.getShortcut());

        CptCode cpt = cptCodeRepository.findByCode(examDTO.getCptCode())
                .orElseGet(() -> cptCodeRepository.save(new CptCode(examDTO.getCptCode())));
        exam.setCptCode(cpt);

        Anatomy anatomy = anatomyRepository.findByName(examDTO.getAnatomy())
                .orElseGet(() -> anatomyRepository.save(new Anatomy(examDTO.getAnatomy())));
        exam.setAnatomy(anatomy);

        Views views = viewsRepository.findByName(examDTO.getViews())
                .orElseGet(() -> viewsRepository.save(new Views(examDTO.getViews())));
        exam.setViews(views);

        Description description = descriptionRepository.findByText(examDTO.getDescription())
                .orElseGet(() -> descriptionRepository.save(new Description(examDTO.getDescription())));
        exam.setDescription(description);

        Alias alias = aliasRepository.findByName(examDTO.getAlias())
                .orElseGet(() -> aliasRepository.save(new Alias(examDTO.getAlias())));
        exam.setAlias(alias);



        return examRepository.save(exam);
    }




}
