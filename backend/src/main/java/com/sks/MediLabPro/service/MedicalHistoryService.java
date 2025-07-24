package com.sks.MediLabPro.service;

import com.sks.MediLabPro.model.MedicalHistory;
import com.sks.MediLabPro.repository.IMedicalHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class MedicalHistoryService {
    @Autowired
    IMedicalHistoryRepository medicalHistoryRepository;

    public List<MedicalHistory> getAllMedicalHistory() {
        List<MedicalHistory> medicalHistoryList = medicalHistoryRepository.findAll();
        return medicalHistoryList;

    }
}
