package com.sks.MediLabPro.model;

import java.time.LocalDate;
import java.time.Year;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.sks.MediLabPro.dto.PatientTo;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PostPersist;
import jakarta.persistence.PrePersist;

@Entity
public class Patient {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-incremented ID
	@Column(name = "pid", updatable = false, nullable = false)
	private Long pId;

	@Column(name = "registration_number", unique = true, nullable = true, length = 20)
	private String registrationNumber; // Unique patient identifier

	private String name;
	private int age;
	private String status;
	private String department;
	private String address;
	private String gender;
	private Long contact;

	@JsonFormat(pattern = "yyyy-MM-dd") // ISO 8601 format (YYYY-MM-DD)
	private LocalDate admissionDate;

	@JsonFormat(pattern = "yyyy-MM-dd") // ISO 8601 format (YYYY-MM-DD)
	private LocalDate dischargeDate;

	@JsonManagedReference
	@OneToMany(mappedBy = "patient", cascade = CascadeType.ALL)
	private List<Appointment> appointments;

	@JsonManagedReference
	@OneToMany(mappedBy = "patient", cascade = CascadeType.ALL)
	private List<MedicalHistory> medicalHistories;

	@JsonManagedReference
	@OneToMany(mappedBy = "patient", cascade = CascadeType.ALL)
	private List<Report> reports;

	 @PostPersist
    private void setRegistrationNumber() {
        if (this.registrationNumber == null) {
            this.registrationNumber = generateFormattedRegistrationNumber();
        }
    }

	private String generateFormattedRegistrationNumber() {
		String prefix = "PT"; // Updated from "REG" to "PT"
		String year = String.valueOf(Year.now().getValue()).toString(); // Last 2 digits of year
		String formattedPid = String.format("%04d", this.pId); // Converts PID to 4-digit format
		return prefix + "-" + year + "-" + formattedPid; // Example: PT-24-0001
	}

	public String getRegistrationNumber() {
		return registrationNumber;
	}

	public Patient() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Patient(PatientTo patientTo) {
		this.pId = patientTo.getpId();
		this.registrationNumber = patientTo.getRegistrationNumber();
		this.name = patientTo.getName();
		this.age = patientTo.getAge();
		this.status = patientTo.getStatus();
		this.department = patientTo.getDepartment();
		this.address = patientTo.getAddress();
		this.gender = patientTo.getGender();
		this.contact = patientTo.getContact();
		this.admissionDate = patientTo.getAdmissionDate();
		this.dischargeDate = patientTo.getDischargeDate();
	}

	public Long getpId() {
		return pId;
	}

	public void setpId(Long pId) {
		this.pId = pId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public LocalDate getAdmissionDate() {
		return admissionDate;
	}

	public void setAdmissionDate(LocalDate admissionDate) {
		this.admissionDate = admissionDate;
	}

	public LocalDate getDischargeDate() {
		return dischargeDate;
	}

	public void setDischargeDate(LocalDate dischargeDate) {
		this.dischargeDate = dischargeDate;
	}

	public Long getContact() {
		return contact;
	}

	public void setContact(Long contact) {
		this.contact = contact;
	}

	public List<Appointment> getAppointments() {
		return appointments;
	}

	public void setAppointments(List<Appointment> appointments) {
		this.appointments = appointments;
	}

	public List<MedicalHistory> getMedicalHistories() {
		return medicalHistories;
	}

	public void setMedicalHistories(List<MedicalHistory> medicalHistories) {
		this.medicalHistories = medicalHistories;
	}

	public List<Report> getReports() {
		return reports;
	}

	public void setReports(List<Report> reports) {
		this.reports = reports;
	}

}
