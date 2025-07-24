package com.sks.MediLabPro.dto;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.sks.MediLabPro.model.Appointment;
import com.sks.MediLabPro.model.Billing;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;


public class BillingTo {

    private Long bId;
    private Appointment appointment;
    private BigDecimal totalAmount;
    private BigDecimal discount;
    private BigDecimal tax;
    private BigDecimal finalAmount;
    private String paymentStatus;
    private String paymentMethod;
    private LocalDateTime billingDate;
    private LocalDateTime dueDate;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private Map<String, Object> entities;

    public BillingTo(Billing billing) {
        this.bId = billing.getBid();
        this.totalAmount = billing.getTotalAmount();
        this.discount = billing.getDiscount();
        this.tax = billing.getTax();
        this.finalAmount = billing.getFinalAmount();
        this.paymentStatus = billing.getPaymentStatus();
        this.paymentMethod = billing.getPaymentMethod();
        this.dueDate = billing.getDueDate();
        this.createdAt=billing.getCreatedAt();
        this.updatedAt=billing.getUpdatedAt();

    }

    public BillingTo() {
    }

    public Long getbId() {
        return bId;
    }

    public void setbId(Long bId) {
        this.bId = bId;
    }

    @JsonIgnore
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

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }

    public Map<String, Object> getEntities() {
        return entities;
    }

    public void setEntities(Map<String, Object> entities) {
        this.entities = entities;
    }

    public void addEntities(String key, Object value) {
        if (this.entities == null) {
            this.entities = new HashMap<>();
        }
        entities.put(key, value);
    }
//    public Object getRelations(){
//        return this.entities.values();
//    }
}
