package com.sks.MediLabPro.dto;

import com.sks.MediLabPro.model.Test;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public class TestTo {
    private Long id;
    private String testName;
    private String description;
    private String category;
    private BigDecimal cost;
    private String sampleRequired;
    private String normalRange;
    private String unit;
    private String method;
    private String status;
    private Integer durationInMinutes;
    private Boolean isHomeCollectionAvailable;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    // Constructors
    public TestTo() {}

    public TestTo(Test test) {
        this.id = test.getId();
        this.testName = test.getTestName();
        this.description = test.getDescription();
        this.category = test.getCategory();
        this.cost = test.getCost();
        this.sampleRequired = test.getSampleRequired();
        this.normalRange = test.getNormalRange();
        this.unit = test.getUnit();
        this.method = test.getMethod();
        this.status = test.getStatus();
        this.durationInMinutes = test.getDurationInMinutes();
        this.isHomeCollectionAvailable = test.getIsHomeCollectionAvailable();
        this.createdAt = test.getCreatedAt();
        this.updatedAt = test.getUpdatedAt();
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public String getTestName() {
        return testName;
    }

    public void setTestName(String testName) {
        this.testName = testName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public BigDecimal getCost() {
        return cost;
    }

    public void setCost(BigDecimal cost) {
        this.cost = cost;
    }

    public String getSampleRequired() {
        return sampleRequired;
    }

    public void setSampleRequired(String sampleRequired) {
        this.sampleRequired = sampleRequired;
    }

    public String getNormalRange() {
        return normalRange;
    }

    public void setNormalRange(String normalRange) {
        this.normalRange = normalRange;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public String getMethod() {
        return method;
    }

    public void setMethod(String method) {
        this.method = method;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Integer getDurationInMinutes() {
        return durationInMinutes;
    }

    public void setDurationInMinutes(Integer durationInMinutes) {
        this.durationInMinutes = durationInMinutes;
    }

    public Boolean getIsHomeCollectionAvailable() {
        return isHomeCollectionAvailable;
    }

    public void setIsHomeCollectionAvailable(Boolean isHomeCollectionAvailable) {
        this.isHomeCollectionAvailable = isHomeCollectionAvailable;
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
}
