package com.sks.MediLabPro.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sks.MediLabPro.model.Appointment;

public interface IAppointmentRepository extends JpaRepository<Appointment, Long> {

}
