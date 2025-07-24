package com.sks.MediLabPro.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sks.MediLabPro.dto.AppointmentTo;
import com.sks.MediLabPro.mapper.Mapper;
import com.sks.MediLabPro.model.Appointment;
import com.sks.MediLabPro.model.Patient;
import com.sks.MediLabPro.repository.IAppointmentRepository;
import com.sks.MediLabPro.repository.IDoctorRepository;
import com.sks.MediLabPro.repository.IPatientRepository;

@Service
public class AppointmentService {
    @Autowired
    IAppointmentRepository appointmentRepository;
    @Autowired
    IDoctorRepository doctorRepository;
    @Autowired
    IPatientRepository patientRepository;

    public List<AppointmentTo> getAllAppointments() {
        List<Appointment> appointmentList = appointmentRepository.findAll();
        return appointmentList.stream().map(appointment -> Mapper.toDto(Optional.of(appointment))).collect(Collectors.toList());

    }


    public Appointment addAppointment(AppointmentTo appointmentTo) {
        // Doctor doctor =
        // doctorRepository.findById(appointmentTo.getDoctorId()).orElseThrow();

        // check patient present in db or not
        Patient patient = patientRepository.findById(appointmentTo.getPatientId()).orElseThrow();
        Appointment appointment = Mapper.toEntity(Optional.of(appointmentTo));
        appointment.setPatient(patient);
        // appointment.setDoctor(doctor);
        return appointmentRepository.save(appointment);
    }

    public Optional<Appointment> findAppointmentById(Long aID) {
        return appointmentRepository.findById(aID);

    }

}
