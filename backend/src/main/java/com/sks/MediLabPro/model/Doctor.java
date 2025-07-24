package com.sks.MediLabPro.model;

import java.time.LocalDate;
import java.time.Year;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.sks.MediLabPro.dto.DoctorTo;

import jakarta.persistence.*;

@Entity
public class Doctor {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long dId;
	@Column(name = "doctor_registration_number", unique = true, nullable = true)
	private String doctorRegistrationNumber;
	private String name;
	private String specialization;
	private String gender;
	@JsonFormat(pattern = "yyyy-MM-dd")
	private LocalDate dateOfBirth;
	private String qualifications;
	private Integer experience;
	private String licenseNumber;
	private String email;
	private String phone;
	private String department;
	private String schedule;
	private Double consultationFee;
	private String status;

//	@OneToMany(mappedBy = "doctor", cascade = CascadeType.ALL)
//	@JsonBackReference
//	private List<Appointment> appointments;

	@OneToMany(mappedBy = "doctor", cascade = CascadeType.ALL)
	@JsonBackReference
	private List<MedicalHistory> medicalHistories;
	
	@OneToMany(mappedBy = "doctor", cascade = CascadeType.ALL)
	private List<Report> reports;

	public Doctor() {
		super();
	}
	public Doctor(DoctorTo doctorTo){
		this.name=doctorTo.getName();
		this.specialization=doctorTo.getSpecialization();
		this.consultationFee=doctorTo.getConsultationFee();
		this.dateOfBirth=doctorTo.getDateOfBirth();
		this.department=doctorTo.getDepartment();
		this.email=doctorTo.getEmail();
		this.consultationFee=doctorTo.getConsultationFee();
		this.experience=doctorTo.getExperience();
		this.licenseNumber=doctorTo.getLicenseNumber();

	}
	@PostPersist
	private void setDoctorRegistrationNumber() {
		if (this.doctorRegistrationNumber == null) {
			this.doctorRegistrationNumber = generateFormattedRegistrationNumber();
		}
	}

	private String generateFormattedRegistrationNumber() {
		String prefix = "DT"; // Updated from "REG" to "PT"
		String year = String.valueOf(Year.now().getValue()).toString(); // Last 2 digits of year
		String formattedPid = String.format("%04d", this.dId);
		return prefix + "-" + year + "-" + formattedPid;
	}
	public String getDoctorRegistrationNumber() {
		return doctorRegistrationNumber;
	}


	public void setdId(Long dId) {
		this.dId = dId;
	}

	public List<MedicalHistory> getMedicalHistories() {
		return medicalHistories;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSpecialization() {
		return specialization;
	}

	public void setSpecialization(String specialization) {
		this.specialization = specialization;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public LocalDate getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(LocalDate dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public String getQualifications() {
		return qualifications;
	}

	public void setQualifications(String qualifications) {
		this.qualifications = qualifications;
	}

	public Integer getExperience() {
		return experience;
	}

	public void setExperience(Integer experience) {
		this.experience = experience;
	}

	public String getLicenseNumber() {
		return licenseNumber;
	}

	public void setLicenseNumber(String licenseNumber) {
		this.licenseNumber = licenseNumber;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	public String getSchedule() {
		return schedule;
	}

	public void setSchedule(String schedule) {
		this.schedule = schedule;
	}

	public Double getConsultationFee() {
		return consultationFee;
	}

	public void setConsultationFee(Double consultationFee) {
		this.consultationFee = consultationFee;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

//	public List<Appointment> getAppointments() {
//		return appointments;
//	}
//
//	public void setAppointments(List<Appointment> appointments) {
//		this.appointments = appointments;
//	}

	public Long getdId() {
		return dId;
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
