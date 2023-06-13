package com.b51zd.patients.api.service;

import com.b51zd.patients.api.dto.PatientDto;
import com.b51zd.patients.api.entity.Patient;
import com.b51zd.patients.api.repository.PatientsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PatientServiceImpl implements PatientService{

    @Autowired
    private PatientsRepository patientsRepository;

    @Override
    public List<PatientDto> getAllPatients(String userId) {
        List<Patient> allPatients = patientsRepository.findAll();
        List<Patient> filteredPatients = allPatients.stream().filter(patient -> patient.getUserId().equals(userId)).collect(Collectors.toList());
        return filteredPatients.stream().map(PatientDto::entityToDto).collect(Collectors.toList());
    }

    @Override
    public PatientDto getPatientById(int patientId) {
        Patient patient = patientsRepository.findById(patientId).orElse(null);
        return PatientDto.entityToDto(patient);
    }

    @Override
    public PatientDto savePatient(PatientDto patientDto) {
        Patient patient = PatientDto.dtoToEntity(patientDto);
        Patient dbPatient=patientsRepository.save(patient);
        patientDto.setPatientId(dbPatient.getPatientId());
        return patientDto;
    }
}
