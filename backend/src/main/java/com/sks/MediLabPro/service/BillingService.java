package com.sks.MediLabPro.service;

import com.sks.MediLabPro.dto.BillingTo;
import com.sks.MediLabPro.mapper.Mapper;
import com.sks.MediLabPro.model.Billing;
import com.sks.MediLabPro.repository.IbillingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
@Service
public class BillingService {
    @Autowired
    IbillingRepository billingRepository;

    public List<BillingTo> getAllBilling() {
        List<Billing> billingList = billingRepository.findAll();
        return billingList.stream().map(Mapper::toDto).collect(Collectors.toList());
    }
    public Billing addBilling(BillingTo billingTo){
        Billing billing=Mapper.toEntity(billingTo);
        return billingRepository.save(billing);
    }
}
