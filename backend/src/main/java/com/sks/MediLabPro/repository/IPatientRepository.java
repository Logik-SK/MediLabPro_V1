package com.sks.MediLabPro.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sks.MediLabPro.model.Patient;

public interface IPatientRepository extends JpaRepository<Patient, Long>{
	  List<Patient> findByNameContainingIgnoreCase(String name);

}
