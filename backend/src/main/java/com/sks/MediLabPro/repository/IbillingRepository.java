package com.sks.MediLabPro.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sks.MediLabPro.model.Billing;

public interface IbillingRepository extends JpaRepository<Billing, Long>  {

}
