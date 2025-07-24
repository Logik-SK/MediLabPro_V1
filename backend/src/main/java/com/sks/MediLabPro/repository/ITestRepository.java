package com.sks.MediLabPro.repository;


import com.sks.MediLabPro.model.Test;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ITestRepository extends JpaRepository<Test, Long> {

    List<Test> findByTestNameContainingIgnoreCase(String testName);

    List<Test> findByCategoryAndStatus(String category, String status);

}
