package com.sks.MediLabPro.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.sks.MediLabPro.model.Appointment;
import com.sks.MediLabPro.model.MedicalHistory;

public class AppointmentTo {

	private Long aId;
	private String appointmentNumber; 
	@JsonFormat(pattern = "yyyy-MM-dd")
	private LocalDate appointmentDate;
	private Double appointmentFee;
	private String reason;
	private String status;
	@JsonFormat(pattern = "HH:mm:ss")
	private LocalTime time;
	private LocalDateTime createdAt;
	private LocalDateTime updatedAt;
	private PatientTo patientTo;
//	private Doctor doctor;

	private Long patientId;// To add patient while persist appointment

	public AppointmentTo() {
		super();
		// TODO Auto-generated constructor stub
	}

	public AppointmentTo(Appointment appointment) {
		super();
		this.aId = appointment.getaId();
		this.appointmentNumber = appointment.getAppointmentNumber();
		this.appointmentDate = appointment.getAppointmentDate();
		this.appointmentFee = appointment.getAppointmentFee();
		this.reason = appointment.getReason();
		this.status = appointment.getStatus();
		this.time = appointment.getTime();
		this.createdAt = appointment.getCreatedAt();
		this.updatedAt = appointment.getUpdatedAt();
	}

	public AppointmentTo(MedicalHistory medicalHistory) {
	}

	public Long getaId() {
		return aId;
	}

	public void setaId(Long aId) {
		this.aId = aId;
	}

	public String getAppointmentNumber() {
		return appointmentNumber;
	}
	public void setAppointmentNumber(String appointmentNumber) {
		this.appointmentNumber = appointmentNumber;
	}
	public LocalDate getAppointmentDate() {
		return appointmentDate;
	}

	public void setAppointmentDate(LocalDate appointmentDate) {
		this.appointmentDate = appointmentDate;
	}

	@JsonBackReference
	public PatientTo getPatientTo() {
		return patientTo;
	}

	public void setPatientTo(PatientTo patientTo) {
		this.patientTo = patientTo;
	}

	public Double getAppointmentFee() {
		return appointmentFee;
	}

	public void setAppointmentFee(Double appointmentFee) {
		this.appointmentFee = appointmentFee;
	}

	public String getReason() {
		return reason;
	}

	public void setReason(String reason) {
		this.reason = reason;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public LocalTime getTime() {
		return time;
	}

	public void setTime(LocalTime time) {
		this.time = time;
	}

	@JsonIgnore
	public Appointment getAppointment() {
		Appointment appointment = new Appointment();
		appointment.setAppointmentFee(this.appointmentFee);
		appointment.setReason(this.reason);
		appointment.setStatus(this.status);
		return appointment;
	}

//
//	public Doctor getDoctor() {
//		return doctor;
//	}
//
//	public void setDoctor(Doctor doctor) {
//		this.doctor = doctor;
//	}
//
//	public AppointmentTo(LocalDateTime appointmentDate, Patient patient, Doctor doctor) {
//		super();
//		this.appointmentDate = appointmentDate;
//		this.patient = patient;
//		this.doctor = doctor;
//	}
	@JsonInclude(JsonInclude.Include.NON_NULL)
	public PatientTo getPatient() {
		return patientTo;
	}

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}

	public LocalDateTime getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(LocalDateTime updatedAt) {
		this.updatedAt = updatedAt;
	}

	@JsonInclude(JsonInclude.Include.NON_NULL)
	public Long getPatientId() {
		return patientId;
	}

	public void setPatientId(Long patientId) {
		this.patientId = patientId;
	}

}
