package com.b51zd.patients.api.repository;

import com.b51zd.patients.api.entity.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientsRepository extends JpaRepository<Patient, Integer> {
}
