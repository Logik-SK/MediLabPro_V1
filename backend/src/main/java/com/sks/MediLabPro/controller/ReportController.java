package com.sks.MediLabPro.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sks.MediLabPro.model.Report;

@RestController
@RequestMapping("/report")
public class ReportController {
	/**
	 * 
	 * @param entity
	 * @return
	 */
	@PostMapping
	public ResponseEntity<Report> createReport(@RequestBody Report entity) {

		return null;
	}

	/**
	 * 
	 * @return
	 */
	@GetMapping
	public ResponseEntity<Report> getAllReports() {
		return null;
	}

	/**
	 * 
	 * @param rId
	 * @return
	 */
	@GetMapping("/rId")
	public ResponseEntity<Report> getReportById(@PathVariable Long rId) {
		return null;
	}

	/**
	 * 
	 * @param rId
	 * @return
	 */
	@GetMapping("/pId")
	public ResponseEntity<Report> getReportByPatientId(@PathVariable Long pId) {
		return null;
	}

	/**
	 * 
	 * @param dId
	 * @return
	 */
	@GetMapping("/dId")
	public ResponseEntity<Report> getReportByDoctorId(@PathVariable Long dId) {
		return null;
	}

	/**
	 * 
	 * @param aId
	 * @return
	 */
	@GetMapping("/aId")
	public ResponseEntity<Report> getReportByAppointmentId(@PathVariable Long aId) {
		return null;
	}

	/**
	 * 
	 * @param rId
	 * @param report
	 * @return
	 */
	@PutMapping("/rId")
	public ResponseEntity<Report> putMethodName(@PathVariable String rId, @RequestBody Report report) {

		return null;
	}

	@DeleteMapping("/rId")
	public ResponseEntity<Void> deleteReport(@PathVariable Long rId) {
		return null;
	}

	/**
	 * 
	 * @param startDate
	 * @param endDate
	 * @return
	 */
	@GetMapping("/{startDate}/{endDate}")
	public ResponseEntity<List<Report>> getReportsByDateRange(
			@RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
			@RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate) {
		return null;
	}

	/**
	 * 
	 * @param reportType
	 * @return
	 */
	@GetMapping("/type/{reportType}")
	public ResponseEntity<List<Report>> getReportsByType(@PathVariable String reportType) {
		return null;
	}

}
