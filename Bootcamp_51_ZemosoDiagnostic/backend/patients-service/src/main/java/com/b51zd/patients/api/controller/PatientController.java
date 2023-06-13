package com.b51zd.patients.api.controller;

import com.b51zd.patients.api.dto.PatientDto;
import com.b51zd.patients.api.exception.PatientNotFoundException;
import com.b51zd.patients.api.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/patients")
public class PatientController {

    @Autowired
    private PatientService patientService;


    @GetMapping("/{patientId}")
    public PatientDto getPatient(@PathVariable int patientId){
        PatientDto patientdto = patientService.getPatientById(patientId);
        if(patientdto == null){
            throw new PatientNotFoundException("Patient with id:"+ patientId + " not found");
        }
        return patientdto;
    }

    @GetMapping("/users/{userId}")
    public List<PatientDto> getAllPatients(@PathVariable String userId){
        List<PatientDto> allPatients = patientService.getAllPatients(userId);
        if(allPatients.isEmpty()){
            throw new PatientNotFoundException("No Patients Found!!");
        }
        return allPatients;
    }



    @PostMapping("/")
    public PatientDto addPatient(@RequestBody PatientDto patientDto){
        PatientDto dbPatientDto = patientService.savePatient(patientDto);
        if(dbPatientDto == null){
            throw new PatientNotFoundException("Insertion Failed!");
        }
        return dbPatientDto;
    }
}
