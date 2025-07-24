package com.sks.MediLabPro.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.sks.MediLabPro.model.Doctor;

import java.time.LocalDate;

public class DoctorTo {
    private String name;
    private String doctorRegistrationNumber;
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

    public DoctorTo( Doctor doctor ){
        this.name=doctor.getName();
        this.specialization=doctor.getSpecialization();
        this.consultationFee=doctor.getConsultationFee();
        this.dateOfBirth=doctor.getDateOfBirth();
        this.department=doctor.getDepartment();
        this.email=doctor.getEmail();
        this.gender=doctor.getGender();
        this.experience=doctor.getExperience();
        this.licenseNumber=doctor.getLicenseNumber();
        this.phone=doctor.getPhone();
        this.qualifications=doctor.getQualifications();
        this.schedule=doctor.getSchedule();
        this.status=doctor.getStatus();
        this.doctorRegistrationNumber=doctor.getDoctorRegistrationNumber();
        
    }
    public DoctorTo() {
        super();
    }
    public String getDoctorRegistrationNumber() {
        return doctorRegistrationNumber;
    }
    public void setDoctorRegistrationNumber(String doctorRegistrationNumber) {
        this.doctorRegistrationNumber = doctorRegistrationNumber;
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
}
