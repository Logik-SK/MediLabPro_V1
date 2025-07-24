package com.sks.MediLabPro.mapper;

import com.sks.MediLabPro.dto.AppointmentTo;
import com.sks.MediLabPro.dto.BillingTo;
import com.sks.MediLabPro.dto.DoctorTo;
import com.sks.MediLabPro.dto.MedicalHistoryTo;
import com.sks.MediLabPro.dto.PatientTo;
import com.sks.MediLabPro.dto.TestTo;
import com.sks.MediLabPro.model.Appointment;
import com.sks.MediLabPro.model.Billing;
import com.sks.MediLabPro.model.Doctor;
import com.sks.MediLabPro.model.MedicalHistory;
import com.sks.MediLabPro.model.Patient;
import com.sks.MediLabPro.model.Test;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.print.Doc;

import org.springframework.util.CollectionUtils;

public class Mapper {
    /**
     * @param appointmentTo
     * @return
     */
    public static Appointment toEntity(Optional<AppointmentTo> appointmentTo) {

        if (appointmentTo.isPresent()) {
            Appointment appointment = new Appointment(appointmentTo.get());
            if (appointmentTo.get().getPatientTo() != null) {
                appointment.setPatient(new Patient(appointmentTo.get().getPatientTo()));
                appointment.getPatient().setAppointments(Collections.singletonList(appointment));
            }
            return appointment;
        } else {
            return new Appointment();
        }

    }

    /**
     * @param patientTo
     * @return
     */
    public static Patient toEntity(PatientTo patientTo) {

        if (patientTo != null) {
            Patient patient = new Patient(patientTo);
            if (!CollectionUtils.isEmpty(patientTo.getAppointmentToList())) {
                List<Appointment> appointments = patientTo.getAppointmentToList().stream().map(appointmentTo -> {
                    Appointment appointment = new Appointment(appointmentTo);
                    appointment.setPatient(patient); // Establish relationship
                    return appointment;
                }).collect(Collectors.toList());
                patient.setAppointments(appointments);

            }
            return patient;
        } else {
            return new Patient();
        }

    }

    /**
     *
     * @param billingTo
     * @return
     */
    public static Billing toEntity(BillingTo billingTo) {
        if (billingTo == null)
            return new Billing();
        return new Billing(billingTo);
    }

    /**
     * Convert Patient to PatientTo
     *
     * @param patient
     * @return
     */
    public static PatientTo toDto(Patient patient) {
        PatientTo patientTo = null;
        if (patient == null)
            return new PatientTo();

        if (patient != null) {
            patientTo = new PatientTo(patient);
            List<AppointmentTo> appointmentToList = patient.getAppointments().stream().map(appointment -> {
                AppointmentTo appointmentTo = new AppointmentTo(appointment);
                return appointmentTo;
            }).collect(Collectors.toList());
            patientTo.setAppointmentToList(appointmentToList);

        }

        return patientTo;
    }

    /**
     * @param appointment
     * @return
     */
    public static AppointmentTo toDto(Optional<Appointment> appointment) {
        AppointmentTo appointmentTo = null;

        if (appointment.isEmpty())
            return new AppointmentTo();

        appointmentTo = new AppointmentTo(appointment.get());
        if (appointment.get().getPatient() != null)
            appointmentTo.setPatientTo(new PatientTo(appointment.get().getPatient()));

        return appointmentTo;
    }

    /**
     * @param medicalHistory
     * @return
     */
    public static MedicalHistoryTo toDto(MedicalHistory medicalHistory) {
        MedicalHistoryTo medicalHistoryTo = null;

        if (medicalHistory != null)
            return new MedicalHistoryTo();

        // medicalHistoryTo = new MedicalHistoryTo(medicalHistory);

        return medicalHistoryTo;
    }

    public static BillingTo toDto(Billing billing) {
        if (billing == null)
            return new BillingTo();
        BillingTo billingTo = new BillingTo(billing);
        billingTo.addEntities("appointment", billing.getAppointment());
        return billingTo;
    }

    // public static MedicalHistory toEntity(MedicalHistoryTo medicalHistoryTo) {
    //     if (medicalHistoryTo == null)
    //         return new MedicalHistory();
    //     // return new MedicalHistory(medicalHistoryTo);
    // }

    /**
     * Convert MedicalHistoryTo to MedicalHistory
     *
     * @param medicalHistoryTo
     * @return
     */
    // public static MedicalHistoryTo toDto(Optional<MedicalHistory> medicalHistory) {
    //     if (medicalHistory.isEmpty())
    //         return new MedicalHistoryTo();
    //     // return new MedicalHistoryTo(medicalHistory.get());
    // }

    /**
     * Convert DoctorTo to Doctor
     *
     * @param doctorTo
     * @return
     */
    public static Doctor toEntity(DoctorTo doctorTo) {
        if (doctorTo == null)
            return new Doctor();
        return new Doctor(doctorTo);
    }

    /**
     * Convert Doctor to DoctorTo
     *
     * @param doctor
     * @return
     */

    public static DoctorTo toDto(Doctor doctor) {
        if (doctor == null)
            return new DoctorTo();
        return new DoctorTo(doctor);
    }
    /**
     * Convert TestTo to Test
     *
     * @param testTo
     * @return
     */

    public static TestTo toDto(Test test) {
        if (test == null)
            return new TestTo();
        return new TestTo(test);
    }
    /**
     * Convert TestTo to Test
     *
     * @param testTo
     * @return
     */

    public static Test toEntity(TestTo testTo) {
        if (testTo == null)
            return new Test();
        return new Test(testTo);
    }


}
