package com.sks.MediLabPro.repository;

import com.sks.MediLabPro.model.MedicalHistory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IMedicalHistoryRepository extends JpaRepository<MedicalHistory, Long> {
}
