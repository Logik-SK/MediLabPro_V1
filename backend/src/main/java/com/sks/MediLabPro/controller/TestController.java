package com.sks.MediLabPro.controller;



import com.sks.MediLabPro.dto.TestTo;
import com.sks.MediLabPro.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tests")
public class TestController {

    private final TestService testService;

    @Autowired
    public TestController(TestService testService) {
        this.testService = testService;
    }


    @PostMapping
    public ResponseEntity<TestTo> createTest(@RequestBody TestTo TestTo) {
        TestTo createdTest = testService.createTest(TestTo);
        return ResponseEntity.ok(createdTest);
    }


    @GetMapping("/{id}")
    public ResponseEntity<TestTo> getTestById(@PathVariable Long id) {
        return ResponseEntity.ok(testService.getTestById(id));
    }


    @GetMapping
    public ResponseEntity<List<TestTo>> getAllTests() {
        return ResponseEntity.ok(testService.getAllTests());
    }

    @PutMapping("/{id}")
    public ResponseEntity<TestTo> updateTest(@PathVariable Long id, @RequestBody TestTo TestTo) {
        return ResponseEntity.ok(testService.updateTest(id, TestTo));
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteTest(@PathVariable Long id) {
        testService.deleteTest(id);
        return ResponseEntity.ok("Test deleted successfully.");
    }


    @GetMapping("/search")
    public ResponseEntity<List<TestTo>> searchTests(@RequestParam String name) {
        return ResponseEntity.ok(testService.searchTestsByName(name));
    }


    @GetMapping("/filter")
    public ResponseEntity<List<TestTo>> filterTests(
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String status) {
        return ResponseEntity.ok(testService.filterTests(category, status));
    }
}
