package com.b51zd.patients.api.controller;

import com.b51zd.patients.api.dto.PatientDto;
import com.b51zd.patients.api.entity.Patient;
import com.b51zd.patients.api.exception.PatientNotFoundExceptionHandler;
import com.b51zd.patients.api.service.PatientServiceImpl;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@ExtendWith(MockitoExtension.class)
class PatientControllerTest {

    @Autowired
    MockMvc mockMvc;

    @InjectMocks
    PatientController patientController;

    @Mock
    PatientServiceImpl patientService;

    PatientNotFoundExceptionHandler patientNotFoundExceptionHandler;

    @BeforeEach
    void setup(){
        patientNotFoundExceptionHandler = new PatientNotFoundExceptionHandler();
        mockMvc = MockMvcBuilders
                .standaloneSetup(patientController)
                .setControllerAdvice(patientNotFoundExceptionHandler)
                .build();
    }


    @Test
    void getPatient() throws Exception {
        PatientDto patientDto = new PatientDto(1,"Myself","Ram",new Date(2022,8,8),"Male", "1");
        Mockito.when(patientService.getPatientById(1)).thenReturn(patientDto);
        mockMvc.perform(MockMvcRequestBuilders.get("/patients/1"))
                .andExpect(status().isOk())
                .andDo(MockMvcResultHandlers.print());
    }

    @Test
    void getPatientExceptionTest() throws Exception {
        Mockito.when(patientService.getPatientById(1)).thenReturn(null);
        mockMvc.perform(MockMvcRequestBuilders.get("/patients/1"))
                .andExpect(status().isNotFound())
                .andDo(MockMvcResultHandlers.print());
    }

    @Test
    void getAllPatients() throws Exception {
        List<PatientDto> allPatients = new ArrayList<>();
        allPatients.add(new PatientDto(1,"Myself","Ram",new Date(2022,8,8),"Male", "1"));
        Mockito.when(patientService.getAllPatients("1")).thenReturn(allPatients);
        mockMvc.perform(MockMvcRequestBuilders.get("/patients/users/1"))
                .andExpect(status().isOk())
                .andDo(MockMvcResultHandlers.print());

    }

    @Test
    void getAllPatientsExceptionTest() throws Exception {
        Mockito.when(patientService.getAllPatients("1")).thenReturn(new ArrayList<>());
        mockMvc.perform(MockMvcRequestBuilders.get("/patients/users/1"))
                .andExpect(status().isNotFound())
                .andDo(MockMvcResultHandlers.print());
    }

    @Test
    void addPatient() throws Exception {
        PatientDto patientDto = new PatientDto(1,"Myself","Ram",new Date(2022,8,8),"Male", "1");
        Mockito.when(patientService.savePatient(patientDto)).thenReturn(patientDto);
        mockMvc.perform(MockMvcRequestBuilders.post("/patients/")
                .content(new ObjectMapper().writeValueAsString(patientDto))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());

    }

    @Test
    void addPatientExceptionTest() throws Exception {
        PatientDto patientDto = new PatientDto(1,"Myself","Ram",new Date(2022,8,8),"Male", "1");
        Mockito.when(patientService.savePatient(patientDto)).thenReturn(null);
        mockMvc.perform(MockMvcRequestBuilders.post("/patients/")
                        .content(new ObjectMapper().writeValueAsString(patientDto))
                        .contentType(MediaType.APPLICATION_JSON))
                        .andExpect(status().isNotFound());
    }
}