package com.sks.MediLabPro.model;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.Year;
import java.time.format.DateTimeFormatter;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.sks.MediLabPro.dto.AppointmentTo;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PostPersist;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;

@Entity
public class Appointment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long aId;
	@Column(name = "appointment_number", unique = true, nullable = true, length = 20)
	private String appointmentNumber; 
	@JsonFormat(pattern = "yyyy-MM-dd") // ISO 8601 format (YYYY-MM-DD)
	private LocalDate appointmentDate;
	@JsonFormat(pattern = "HH:mm:ss")
	private LocalTime time;

//	@ManyToOne(cascade = CascadeType.ALL)
//	@JoinColumn(name = "dId")
//	private Doctor doctor;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "pId")
	@JsonBackReference
	private Patient patient;

	private Double appointmentFee;
	private String reason;
	private String status; // Scheduled, Completed, Canceled
	private LocalDateTime createdAt;
	private LocalDateTime updatedAt;

	public Long getaId() {
		return aId;
	}

	public void setaId(Long aId) {
		this.aId = aId;
	}
	 @PostPersist
    private void setAppointmentNumber() {
        if (this.appointmentNumber == null) {
            this.appointmentNumber = generateFormattedAppointmentNumber();
        }
    }

	private String generateFormattedAppointmentNumber() {
		String prefix = "APT"; 
		String fullDate = LocalDate.now().format(DateTimeFormatter.ofPattern("ddMMyyyy"));
		String formattedAid = String.format("%04d", this.aId); 
		return prefix + "-" + fullDate + "-" + formattedAid; 
	}
	public String getAppointmentNumber() {
		return appointmentNumber;
	}

	public LocalDate getAppointmentDate() {
		return appointmentDate;
	}

	public void setAppointmentDate(LocalDate appointmentDate) {
		this.appointmentDate = appointmentDate;
	}

	public Double getAppointmentFee() {
		return appointmentFee;
	}

	public void setAppointmentFee(Double appointmentFee) {
		this.appointmentFee = appointmentFee;
	}

//	public Doctor getDoctor() {
//		return doctor;
//	}
//
//	public void setDoctor(Doctor doctor) {
//		this.doctor = doctor;
//	}

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
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

	public Appointment() {
		super();
		// TODO Auto-generated constructor stub
	}

	public LocalTime getTime() {
		return time;
	}

	public void setTime(LocalTime time) {
		this.time = time;
	}

	@PrePersist
	protected void onCreate() {
		this.createdAt = LocalDateTime.now();
	}

	@PreUpdate
	protected void onUpdate() {
		this.updatedAt = LocalDateTime.now();
	}

	public Appointment(AppointmentTo appointmentTo) {
		super();
		this.aId = appointmentTo.getaId();
		this.appointmentDate = appointmentTo.getAppointmentDate();
		this.time = appointmentTo.getTime();
		this.appointmentFee = appointmentTo.getAppointmentFee();
		this.reason = appointmentTo.getReason();
		this.status = appointmentTo.getStatus();
		this.createdAt = null;
		this.updatedAt = null;
	}

}
