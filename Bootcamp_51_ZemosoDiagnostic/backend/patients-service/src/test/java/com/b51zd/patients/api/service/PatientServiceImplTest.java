package com.b51zd.patients.api.service;

import com.b51zd.patients.api.dto.PatientDto;
import com.b51zd.patients.api.entity.Patient;
import com.b51zd.patients.api.repository.PatientsRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;

@ExtendWith(MockitoExtension.class)
class PatientServiceImplTest {

    @Mock
    PatientsRepository patientsRepository;

    @InjectMocks
    PatientService patientService = new PatientServiceImpl();


    @Test
    void getAllPatients() {
        List<Patient> allPatients = new ArrayList<>();
        allPatients.add(new Patient(1,"Myself","Ram",new Date(2022,8,8),"Male", "1"));
        Mockito.when(patientsRepository.findAll()).thenReturn(allPatients);

        List<PatientDto> patients = patientService.getAllPatients("1");
        assertEquals(allPatients.size(), patients.size());
    }
    @Test
    void getAllPatientsException() {
        List<Patient> allPatients = new ArrayList<>();
        Mockito.when(patientsRepository.findAll()).thenReturn(allPatients);

        List<PatientDto> patients = patientService.getAllPatients("1");
        assertEquals(allPatients.size(), patients.size());
    }
    @Test
    void getPatientById() {
        Patient patient = new Patient(1,"Myself","Ram",new Date(2022,8,8),"Male", "1");
        Mockito.when(patientsRepository.findById(1)).thenReturn(Optional.of(patient));
        PatientDto patientDto = patientService.getPatientById(1);
        assertThat(patient.getDob()).isSameAs(patientDto.getDob());
    }

    @Test
    void savePatient() {
        Patient patient = new Patient(1,"Myself","Ram",new Date(2022,8,8),"Male", "1");
        PatientDto newPatientDto = PatientDto.entityToDto(patient);
        Mockito.lenient().when(patientsRepository.save(any(Patient.class))).thenAnswer(invocationOnMock -> {
            Object arg = invocationOnMock.getArgument(0);
            return patient;
        });
        PatientDto patientDto = patientService.savePatient(newPatientDto);
        assertThat(patient.getName()).isSameAs(patientDto.getName());
    }
}