package com.sks.MediLabPro.controller;

import com.sks.MediLabPro.dto.BillingTo;
import com.sks.MediLabPro.model.Billing;
import com.sks.MediLabPro.service.BillingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/billing")
public class BillingController {
    @Autowired
    BillingService billingService;

    /**
     * @return
     */
    @GetMapping
    public ResponseEntity<List<BillingTo>> getAllBilling() {
        Optional<List<BillingTo>> allBilling = Optional.ofNullable(billingService.getAllBilling());
        return allBilling.filter(billing -> !billing.isEmpty()).map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.noContent().build());

    }

    /**
     * @param billingTo
     * @return
     */
    @PostMapping
    public ResponseEntity<Billing> addBilling(@RequestBody BillingTo billingTo) {

        Optional<Billing> addBilling = Optional.ofNullable(billingService.addBilling(billingTo));
        return addBilling.map(ResponseEntity::ok).orElseGet(()->ResponseEntity.noContent().build());
    }

    /**
     * @param bID
     * @return
     */
    @GetMapping("/bId")
    public ResponseEntity<Billing> getBillingById(@PathVariable Long bID) {
        return null;
    }

    /**
     * @return
     */
    @GetMapping("/pending")
    public ResponseEntity<Billing> getAllPendingBilling() {
        return null;
    }

    /**
     * @param bId
     * @param billing
     * @return
     */
    @PutMapping("/{bId}")
    public ResponseEntity<Billing> putMethodName(@PathVariable Long bId, @RequestBody Billing billing) {

        return null;
    }

    /**
     * @param Id
     * @return
     */
    @DeleteMapping("/bID")
    public ResponseEntity<Void> deleteBillingById(@PathVariable Long Id) {
        return null;
    }

    /**
     * @param bId
     * @return
     */
    @PatchMapping("{bId}/pay")
    public ResponseEntity<String> markBillingAsPaid(@PathVariable Long bId) {
//		return billingRepository.findById(bId).map(billing -> {
//			if (billing.isPaid()) {
//				return ResponseEntity.badRequest().body("Billing record is already paid.");
//			}
//			billing.setPaid(true);
//			billing.setPaymentDate(LocalDateTime.now()); // Set payment timestamp
//			billingRepository.save(billing);
//			return ResponseEntity.ok("Billing record marked as paid.");
//		}).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).body("Billing record not found."));

        return null;
    }

}
