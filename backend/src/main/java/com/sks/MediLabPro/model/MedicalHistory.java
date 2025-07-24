package com.sks.MediLabPro.model;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
@Entity
public class MedicalHistory {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long mHid;

	@ManyToOne
	@JoinColumn(name = "patient_pId", nullable = false)
	@JsonBackReference
	private Patient patient;
	
	@ManyToOne
	@JoinColumn(name = "dId", nullable = false)
	private Doctor doctor;

	private String diagnosis;
	private String symptoms;
	private String treatmentPlan;
	private String medications;
	private String testResults;
	private String doctorNotes;

	private LocalDate visitDate;
	private String followUpAdvice;
	
	
	public Long getId() {
		return mHid;
	}
	public void setId(Long id) {
		this.mHid = id;
	}
	public Patient getPatient() {
		return patient;
	}
	public void setPatient(Patient patient) {
		this.patient = patient;
	}
//	public Doctor getDoctor() {
//		return doctor;
//	}
//	public void setDoctor(Doctor doctor) {
//		this.doctor = doctor;
//	}
	public String getDiagnosis() {
		return diagnosis;
	}
	public void setDiagnosis(String diagnosis) {
		this.diagnosis = diagnosis;
	}
	public String getSymptoms() {
		return symptoms;
	}
	public void setSymptoms(String symptoms) {
		this.symptoms = symptoms;
	}
	public String getTreatmentPlan() {
		return treatmentPlan;
	}
	public void setTreatmentPlan(String treatmentPlan) {
		this.treatmentPlan = treatmentPlan;
	}
	public String getMedications() {
		return medications;
	}
	public void setMedications(String medications) {
		this.medications = medications;
	}
	public String getTestResults() {
		return testResults;
	}
	public void setTestResults(String testResults) {
		this.testResults = testResults;
	}
	public String getDoctorNotes() {
		return doctorNotes;
	}
	public void setDoctorNotes(String doctorNotes) {
		this.doctorNotes = doctorNotes;
	}
	public LocalDate getVisitDate() {
		return visitDate;
	}
	public void setVisitDate(LocalDate visitDate) {
		this.visitDate = visitDate;
	}
	public String getFollowUpAdvice() {
		return followUpAdvice;
	}
	public void setFollowUpAdvice(String followUpAdvice) {
		this.followUpAdvice = followUpAdvice;
	}

	
}
