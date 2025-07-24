package com.sks.MediLabPro.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sks.MediLabPro.model.Doctor;

public interface IDoctorRepository extends JpaRepository<Doctor, Long> {

}
