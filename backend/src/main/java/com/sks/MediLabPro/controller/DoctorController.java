package com.sks.MediLabPro.controller;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sks.MediLabPro.dto.DoctorTo;
import com.sks.MediLabPro.model.Appointment;
import com.sks.MediLabPro.model.Doctor;
import com.sks.MediLabPro.service.DoctorService;

@RestController
@RequestMapping("api/doctors")
public class DoctorController {
	@Autowired
	DoctorService doctorService;

	/**
	 * 
	 * @return
	 */
	@GetMapping
	public ResponseEntity<List<DoctorTo>> getAllDoctors() {
		Optional<List<DoctorTo>> doctorTo = Optional.ofNullable(doctorService.getAllDoctors());

		return doctorTo.filter(list -> !list.isEmpty()).map(ResponseEntity::ok)
				.orElseGet(() -> ResponseEntity.noContent().build());
	}

	/**
	 * 
	 * @param doctorTo
	 * @return
	 */
	@PostMapping
	public ResponseEntity<Doctor> addDoctors(@RequestBody DoctorTo doctorTo) {
		Optional<Doctor> addedDoctor = Optional.ofNullable(doctorService.addDoctor(doctorTo));

        // Return the added patient
        // 400 Bad Request if adding fails
        return addedDoctor.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.badRequest().build());
	}

	/**
	 * 
	 * @param doctorId
	 * @param UpdatedDoctor
	 * @return
	 */
	@PutMapping("/doctorId")
	public Doctor updateDoctor(@PathVariable Long doctorId, @RequestBody Doctor UpdatedDoctor) {
		return doctorService.updateDoctor(doctorId, UpdatedDoctor);

	}

	/**
	 * 
	 * @param doctorId
	 * @return
	 */
	@GetMapping("/doctor/{doctorId}")
	public ResponseEntity<Doctor> findDoctorById(@PathVariable long doctorId) {
		Optional<Doctor> doctor = doctorService.findDoctorById(doctorId);
		return doctor.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.badRequest().build());

	}

	/**
	 * 
	 * @param dName
	 * @return
	 */
	@GetMapping("/search")
	public ResponseEntity<Doctor> getDoctorByName(@RequestParam String dName) {
		return null;
	}

	/**
	 * 
	 * @param specialization
	 * @return
	 */
	@GetMapping("/specialization")
	public ResponseEntity<Doctor> getDoctorBySpecialization(@RequestParam String specialization) {
		return null;
	}

	/**
	 * 
	 * @param Did
	 * @return
	 */
	@GetMapping("/{id}/appointments")
	public ResponseEntity<Appointment> getAllAppointment(@PathVariable Long Did) {
		return null;
	}

	/**
	 * 
	 * @param date
	 * @return
	 */
	@GetMapping("/available")
	public ResponseEntity<Doctor> getAvilableDoctorByDate(@RequestParam LocalDateTime date) {
		return null;
	}

}
