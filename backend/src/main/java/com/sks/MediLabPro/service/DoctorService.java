package com.sks.MediLabPro.service;

import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.sks.MediLabPro.dto.DoctorTo;
import com.sks.MediLabPro.mapper.Mapper;
import com.sks.MediLabPro.model.Doctor;
import com.sks.MediLabPro.repository.IDoctorRepository;

@Service
public class DoctorService {
	@Autowired
	IDoctorRepository doctorRepository;

	public List<DoctorTo> getAllDoctors() {
		
		return doctorRepository.findAll().stream().map(doctor->Mapper.toDto(doctor)).collect(Collectors.toList());
	}

	public Doctor addDoctor(DoctorTo doctorTo) {

		return doctorRepository.save(Mapper.toEntity(doctorTo));
	}

	public Optional<Doctor> findDoctorById(long doctorId) {
		return doctorRepository.findById(doctorId);
	}

	public Doctor updateDoctor(Long doctorId, Doctor updatedDoctor) {
		Doctor existingDoctor = doctorRepository.findById(doctorId)
				.orElseThrow(() -> new NoSuchElementException("Doctor not found with ID: " + doctorId));
		if (StringUtils.hasText(updatedDoctor.getName())) {
			existingDoctor.setName(null);
		}
		if (StringUtils.hasLength(updatedDoctor.getSpecialization())) {
			existingDoctor.setSpecialization(null);
		}
		return doctorRepository.save(existingDoctor);

	}

}
