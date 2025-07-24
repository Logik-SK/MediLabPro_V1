package com.sks.MediLabPro.controller;

import com.sks.MediLabPro.dto.MedicalHistoryTo;
import com.sks.MediLabPro.model.MedicalHistory;
import com.sks.MediLabPro.service.MedicalHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/medical-history")
public class MedicalHistoryController {
    @Autowired
    MedicalHistoryService medicalHistoryService;

    /**
     * @return
     */
    @GetMapping
    public ResponseEntity<List<MedicalHistory>> getAllMedicalRecords() {
        Optional<List<MedicalHistory>> medicalHistoryList = Optional.ofNullable(medicalHistoryService.getAllMedicalHistory());
        return medicalHistoryList.filter(mdlist -> !mdlist.isEmpty()).map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.noContent().build());
    }

    /**
     * @param medicalHistory
     * @return
     */
    @PostMapping
    public ResponseEntity<MedicalHistory> postMethodName(@RequestBody MedicalHistory medicalHistory) {

        return null;
    }

    /**
     * @param mHid
     * @return
     */
    @GetMapping("/mHid")
    public ResponseEntity<MedicalHistoryTo> getMethodName(@PathVariable Long mHid) {
        return null;
    }

    /**
     * @param mHid
     * @param medicalHistory
     * @return
     */
    @PutMapping("/{mHid}")
    public ResponseEntity<MedicalHistory> putMethodName(@PathVariable Long mHid,
                                                        @RequestBody MedicalHistory medicalHistory) {

        return null;

    }

    /**
     * @param mHid
     * @return
     */
    @DeleteMapping("/mHid")
    public ResponseEntity<Void> deleteMedicalRecordById(@PathVariable Long mHid) {

        return null;
    }

}