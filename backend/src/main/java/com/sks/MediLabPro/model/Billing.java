package com.sks.MediLabPro.model;

import com.sks.MediLabPro.dto.BillingTo;
import jakarta.persistence.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "billing")
public class Billing {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bId;

//	@ManyToOne
//	@JoinColumn(name = "pId", nullable = false)
//	private Patient patient;

    @OneToOne
    @JoinColumn(name = "aId", nullable = true)
    private Appointment appointment;

    @Column(nullable = false)
    private BigDecimal totalAmount;

    private BigDecimal discount;
    private BigDecimal tax;

    @Column(nullable = false)
    private BigDecimal finalAmount;

    @Column(nullable = false)
    private String paymentStatus; // Pending, Paid, Failed

    private String paymentMethod; // Cash, Credit Card, Insurance

   // @Column(nullable = false)
    private LocalDateTime billingDate;

    private LocalDateTime dueDate;

    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    public Billing() {

    }

    public Billing(BillingTo billingTo) {

        this.totalAmount = billingTo.getTotalAmount();
        this.discount = billingTo.getDiscount();
        this.tax = billingTo.getTax();
        this.finalAmount = billingTo.getFinalAmount();
        this.paymentStatus = billingTo.getPaymentStatus();
        this.paymentMethod = billingTo.getPaymentMethod();
       this.dueDate = billingTo.getDueDate();
    }

    @PrePersist
    protected void onCreate() {
        this.createdAt = LocalDateTime.now();
        this.billingDate = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        this.updatedAt = LocalDateTime.now();
    }

    // Getters and Setters
    public Long getBid() {
        return bId;
    }

//	public Patient getPatient() {
//		return patient;
//	}
//
//	public void setPatient(Patient patient) {
//		this.patient = patient;
//	}

    public void setBid(Long bId) {
        this.bId = bId;
    }

    public Appointment getAppointment() {
        return appointment;
    }

    public void setAppointment(Appointment appointment) {
        this.appointment = appointment;
    }

    public BigDecimal getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(BigDecimal totalAmount) {
        this.totalAmount = totalAmount;
    }

    public BigDecimal getDiscount() {
        return discount;
    }

    public void setDiscount(BigDecimal discount) {
        this.discount = discount;
    }

    public BigDecimal getTax() {
        return tax;
    }

    public void setTax(BigDecimal tax) {
        this.tax = tax;
    }

    public BigDecimal getFinalAmount() {
        return finalAmount;
    }

    public void setFinalAmount(BigDecimal finalAmount) {
        this.finalAmount = finalAmount;
    }

    public String getPaymentStatus() {
        return paymentStatus;
    }

    public void setPaymentStatus(String paymentStatus) {
        this.paymentStatus = paymentStatus;
    }

    public String getPaymentMethod() {
        return paymentMethod;
    }

    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public LocalDateTime getBillingDate() {
        return billingDate;
    }

    public void setBillingDate(LocalDateTime billingDate) {
        this.billingDate = billingDate;
    }

    public LocalDateTime getDueDate() {
        return dueDate;
    }

    public void setDueDate(LocalDateTime dueDate) {
        this.dueDate = dueDate;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }
}
