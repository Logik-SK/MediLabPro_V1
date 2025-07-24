package com.sks.MediLabPro.model;

import jakarta.persistence.*;
import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "reports")
public class Report {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long rId; // Report ID

	private String reportType; // e.g., "Lab Test", "Billing Report", "Prescription"
	private LocalDate reportDate; // Date when the report was generated
	private String description; // Detailed report info
	private String filePath; // File path if stored as a document
	private boolean isArchived; // Flag to mark archived reports

	@ManyToOne
	@JoinColumn(name = "pId")
	@JsonBackReference
	private Patient patient;

	@ManyToOne
	@JoinColumn(name = "dId")
	@JsonBackReference
	private Doctor doctor;

	@OneToOne
	@JoinColumn(name = "aId")
	private Appointment appointment;

	public Long getrId() {
		return rId;
	}

	public void setrId(Long rId) {
		this.rId = rId;
	}

	public String getReportType() {
		return reportType;
	}

	public void setReportType(String reportType) {
		this.reportType = reportType;
	}

	public LocalDate getReportDate() {
		return reportDate;
	}

	public void setReportDate(LocalDate reportDate) {
		this.reportDate = reportDate;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getFilePath() {
		return filePath;
	}

	public void setFilePath(String filePath) {
		this.filePath = filePath;
	}

	public boolean isArchived() {
		return isArchived;
	}

	public void setArchived(boolean archived) {
		isArchived = archived;
	}

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

	public Doctor getDoctor() {
		return doctor;
	}

	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}

	public Appointment getAppointment() {
		return appointment;
	}

	public void setAppointment(Appointment appointment) {
		this.appointment = appointment;
	}
}
