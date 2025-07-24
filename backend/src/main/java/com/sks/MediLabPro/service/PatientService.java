package com.sks.MediLabPro.service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.sks.MediLabPro.dto.PatientTo;
import com.sks.MediLabPro.mapper.Mapper;
import com.sks.MediLabPro.model.Patient;
import com.sks.MediLabPro.repository.IPatientRepository;

@Service
public class PatientService {
	@Autowired
	IPatientRepository patientRepository;

	public List<PatientTo> getAllPatients() {

		List<Patient> patientlList = patientRepository.findAll();// get all patients
		return patientlList.stream().map(patient -> Mapper.toDto(patient)).collect(Collectors.toList());
	}

	public Patient addPatient(PatientTo patientTo) {

		return patientRepository.save(Mapper.toEntity(patientTo));

	}

	public boolean deletePatient(Long pId) {
		if (patientRepository.existsById(pId)) {
			patientRepository.deleteById(pId);
			return true;
		}
		return false;

	}

	public Patient updatePatient(Long id, PatientTo updatedPatientTo) {
		// Fetch the existing patient
		Patient updatedPatient = Mapper.toEntity(updatedPatientTo);
		Patient existingPatient = patientRepository.findById(id)
				.orElseThrow(() -> new NoSuchElementException("Patient not found with ID: " + id));

		if (StringUtils.hasText(updatedPatient.getName())) {
			existingPatient.setName(updatedPatient.getName());
		}
		if (StringUtils.hasText(updatedPatient.getDepartment())) {
			existingPatient.setDepartment(updatedPatient.getDepartment());
		}
		if (StringUtils.hasText(updatedPatient.getStatus())) {
			existingPatient.setStatus(updatedPatient.getStatus());
		}
		if (updatedPatient.getAge() != 0) {
			existingPatient.setAge(updatedPatient.getAge());
		}
		if (updatedPatient.getDischargeDate() != null) {
			existingPatient.setDischargeDate(updatedPatient.getDischargeDate());
		}
		if(updatedPatient.getAdmissionDate() != null) {
			existingPatient.setAdmissionDate(updatedPatient.getAdmissionDate());
		}
		if (StringUtils.hasText(updatedPatient.getAddress())) {
			existingPatient.setAddress(updatedPatient.getAddress());
		}	
		return patientRepository.save(existingPatient);

	}

	public Optional<Patient> findByPatientId(Long patientId) {
		return patientRepository.findById(patientId);

	}

	// public List<PatientTo> searchPatientByName(String pName) {
	// if (!StringUtils.hasText(pName)) {
	// return new ArrayList<PatientTo>();
	// }
	// List<Patient> patientList =
	// patientRepository.findByNameContainingIgnoreCase(pName);
	// List<PatientTo> patientToList = new ArrayList<PatientTo>();
	// Optional.ofNullable(patientList).ifPresent(pL -> {
	// pL.forEach(p -> {
	// patientToList.add(new PatientTo(p.getName(), p.getAge(), p.getStatus(), null,
	// null, null, null, null,
	// null, null));
	// });
	// });
	// return patientToList;
	//
	// }

}
