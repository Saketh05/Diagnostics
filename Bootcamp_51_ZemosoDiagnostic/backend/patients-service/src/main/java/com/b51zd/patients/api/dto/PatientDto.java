package com.b51zd.patients.api.dto;

import com.b51zd.patients.api.entity.Patient;
import lombok.*;

import java.sql.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PatientDto {

    private int patientId;

    private String relation;

    private String name;

    private Date dob;

    private String gender;

    private String userId;


    public static Patient dtoToEntity(PatientDto patientDto){
        if(patientDto == null){
            return null;
        }
        Patient patient = new Patient();
        patient.setPatientId(patientDto.getPatientId());
        patient.setRelation(patientDto.getRelation());
        patient.setName(patientDto.getName());
        patient.setDob(patientDto.getDob());
        patient.setGender(patientDto.getGender());
        patient.setUserId(patientDto.getUserId());

        return patient;
    }

    public static PatientDto entityToDto (Patient patient){
        if(patient == null){
            return null;
        }

        PatientDto patientDto = new PatientDto();
        patientDto.setPatientId(patient.getPatientId());
        patientDto.setRelation(patient.getRelation());
        patientDto.setName(patient.getName());
        patientDto.setDob(patient.getDob());
        patientDto.setGender(patient.getGender());
        patientDto.setUserId(patient.getUserId());

        return patientDto;
    }
}
