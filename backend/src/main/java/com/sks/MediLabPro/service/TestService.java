package com.sks.MediLabPro.service;


import com.sks.MediLabPro.dto.TestTo;
import com.sks.MediLabPro.mapper.Mapper;
import com.sks.MediLabPro.model.Test;
import com.sks.MediLabPro.repository.ITestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TestService {
   @Autowired
   ITestRepository testRepository;


    public TestTo createTest(TestTo TestTo) {
        Test test = Mapper.toEntity(TestTo);
        test.setStatus("ACTIVE"); // default status
        Test saved = testRepository.save(test);
        return Mapper.toDto(saved);
    }

    public TestTo getTestById(Long id) {
        Test test = testRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Test not found with ID: " + id));
        return Mapper.toDto(test);
    }

    public List<TestTo> getAllTests() {
        return testRepository.findAll().stream()
                .map(Mapper::toDto)
                .collect(Collectors.toList());
    }

    public TestTo updateTest(Long id, TestTo TestTo) {
        Test existing = testRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Test not found with ID: " + id));

        existing.setTestName(TestTo.getTestName());
        existing.setCategory(TestTo.getCategory());
        existing.setDescription(TestTo.getDescription());


        Test updated = testRepository.save(existing);
        return Mapper.toDto(updated);
    }

    public void deleteTest(Long id) {
        if (!testRepository.existsById(id)) {
            throw new RuntimeException("Test not found with ID: " + id);
        }
        testRepository.deleteById(id);
    }

    public List<TestTo> searchTestsByName(String name) {
        return testRepository.findByTestNameContainingIgnoreCase(name).stream()
                .map(Mapper::toDto)
                .collect(Collectors.toList());
    }

    public List<TestTo> filterTests(String category, String status) {
        return testRepository.findByCategoryAndStatus(category, status).stream()
                .map(Mapper::toDto)
                .collect(Collectors.toList());
    }




}
