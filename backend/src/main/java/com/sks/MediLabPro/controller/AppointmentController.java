package com.sks.MediLabPro.controller;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sks.MediLabPro.dto.AppointmentTo;
import com.sks.MediLabPro.model.Appointment;
import com.sks.MediLabPro.service.AppointmentService;

@RestController
@RequestMapping("api/appointments")
public class AppointmentController {
	@Autowired
	AppointmentService appointmentService;

	/**
	 * 
	 * @return
	 */
	@GetMapping
	public ResponseEntity<List<AppointmentTo>> getAllAppointments() {
		//fetch from database
		Optional<List<AppointmentTo>> appointment = Optional.ofNullable(appointmentService.getAllAppointments());

		return appointment.filter(list -> !list.isEmpty()).map(ResponseEntity::ok)
				.orElseGet(() -> ResponseEntity.noContent().build());
	}

	/**
	 * 
	 * @param appointmentTo
	 * @return
	 */
	@PostMapping
	public ResponseEntity<Appointment> addAppointment(@RequestBody AppointmentTo appointmentTo) {
		Optional<Appointment> addedappointment = Optional
				.ofNullable(appointmentService.addAppointment(appointmentTo));

		if (addedappointment.isPresent()) {
			return ResponseEntity.ok(addedappointment.get()); // Return the added patient
		} else {
			return ResponseEntity.badRequest().build(); // 400 Bad Request if adding fails
		}
	}

	/**
	 * 
	 * @param aID
	 * @return
	 */
	@GetMapping("/{aID}")
	public ResponseEntity<Appointment> findAppointmentById(@PathVariable Long aID) {
		Optional<Appointment> appointment = appointmentService.findAppointmentById(aID);
		return appointment.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.badRequest().build());

	}

	/**
	 * 
	 * @param aId
	 * @param appointment
	 * @return
	 */
	@PutMapping("/{aId}")
	public ResponseEntity<Appointment> updateAppointment(@PathVariable Long aId, Appointment appointment) {
		return null;

	}

	/**
	 * 
	 * @param aId
	 * @return
	 */
	@DeleteMapping("/{aId}")
	public ResponseEntity<Void> deleteAppointment(@PathVariable Long aId) {
		return null;

	}

	/**
	 * 
	 * @param date
	 * @return
	 */
	@GetMapping("/date")
	public ResponseEntity<AppointmentTo> getAppointementByDate(
			@RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date) {
		return null;
	}

}
