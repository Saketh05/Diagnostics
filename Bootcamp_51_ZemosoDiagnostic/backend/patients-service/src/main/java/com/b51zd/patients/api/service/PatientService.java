package com.b51zd.patients.api.service;

import com.b51zd.patients.api.dto.PatientDto;

import java.util.List;

public interface PatientService {

    List<PatientDto> getAllPatients(String userId);
    PatientDto getPatientById(int patientId);

    PatientDto savePatient(PatientDto newPatient);
}
