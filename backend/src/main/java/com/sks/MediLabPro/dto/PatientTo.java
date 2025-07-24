
package com.sks.MediLabPro.dto;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.sks.MediLabPro.model.Patient;

public class PatientTo {

	private long pId;
	private String registrationNumber;
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

	private List<AppointmentTo> appointmentToList;

	public PatientTo() {
		super();
	}

	public PatientTo(Patient patient) {
		super();
		this.pId = patient.getpId();
		this.registrationNumber = patient.getRegistrationNumber();
		this.name = patient.getName();
		this.age = patient.getAge();
		this.status = patient.getStatus();
		this.department = patient.getDepartment();
		this.address = patient.getAddress();
		this.gender = patient.getGender();
		this.contact = patient.getContact();
		this.admissionDate = patient.getAdmissionDate();
		this.dischargeDate = patient.getDischargeDate();
	}

	public String getRegistrationNumber() {
		return registrationNumber;
	}

	public void setRegistrationNumber(String registrationNumber) {
		this.registrationNumber = registrationNumber;
	}

	public String getName() {
		return name;
	}

	public long getpId() {
		return pId;
	}

	public void setpId(long pId) {
		this.pId = pId;
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

	@JsonBackReference
	public List<AppointmentTo> getAppointmentToList() {
		return appointmentToList;
	}

	@JsonInclude(JsonInclude.Include.NON_NULL) // Exclude if null
	public List<AppointmentTo> getAppointments() {
		return appointmentToList;
	}

	public void setAppointmentToList(List<AppointmentTo> appointmentList) {
		this.appointmentToList = appointmentList;
	}

	public void addAppointment(AppointmentTo appointment) {
		Optional.ofNullable(appointmentToList).orElseGet(() -> {
			appointmentToList = new ArrayList<>();
			return appointmentToList;
		}).add(appointment);

	}

}
