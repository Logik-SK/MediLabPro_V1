package com.sks.MediLabPro.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewController {

	 @GetMapping("/login")
	 public String loginPage() {
	 	return  "html/login.html";
	 }
	@GetMapping("/")
	public String indexPage() {
		return "redirect:/dashboard";
	}

	@GetMapping("/dashboard")
	public String dashboardPage() {
		return "html/dashboard.html";
	}

	@GetMapping("/patients")
	public String patientsPage() {
		return "html/patients.html";
	}

	@GetMapping("/doctors")
	public String doctorsPage() {
		return "html/doctors.html";
	}

	@GetMapping("/addPatient")
	public String addPatient() {
		return "html/addPatient.html";
	}

	@GetMapping("/addDoctor")
	public String addDoctor() {
		return "html/addDoctor.html";
	}

	@GetMapping("/viewPatient")
	public String viewPatient() {
		return "html/viewPatient.html";
	}

	@GetMapping("/editPatient")
	public String editPatient() {
		return "html/viewPatient.html";
	}

	@GetMapping("/appointments")
	public String getMethodName() {
		return "html/appointments.html";
	}

	@GetMapping("/billing-payments")
	public String viewBillingAndPayments() {
		return "html/billingAndPayments.html";
	}

	@GetMapping("/departments")
	public String departmentsPage() {
		return "html/departments.html";
	}

	@GetMapping("/tests")
	public String testsPage() {
		return "html/tests.html";
	}

	@GetMapping("/reports")
	public String reportsPage() {
		return "html/reports.html";
	}

	@GetMapping("/sample-collection")
	public String sampleCollection() {
		return "html/sampleCollection.html";
	}
	@GetMapping("/test-results")
	public String testResults() {
		return "html/testResults.html";
	}
	@GetMapping("/inventory")
	public String inventory() {
		return "html/inventory.html";
	}
	@GetMapping("/settings")
	public String settings() {
		return "html/settings.html";
	}
	@GetMapping("/notifications")
	public String notifications() {
		return "html/notifications.html";
	}
	@GetMapping("/user-profile")
	public String userProfile() {
		return "html/userProfile.html";
	}
	@GetMapping("/logout")
	public String logout() {
		return "html/login.html";
	}
	@GetMapping("/error")
	public String error() {
		return "html/error.html";
	}
	@GetMapping("/about")
	public String about() {
		return "html/about.html";
	}
	@GetMapping("/contact")
	public String contact() {
		return "html/contact.html";
	}
	@GetMapping("/privacy-policy")
	public String privacyPolicy() {
		return "html/privacyPolicy.html";
	}
	@GetMapping("/terms-of-service")
	public String termsOfService() {
		return "html/termsOfService.html";
	}
	@GetMapping("/feedback")
	public String feedback() {
		return "html/feedback.html";
	}
	@GetMapping("/help")
	public String help() {
		return "html/help.html";
	}
	@GetMapping("/faq")
	public String faq() {
		return "html/faq.html";
	}
	

}
