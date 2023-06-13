package com.b51zd.patients.api.entity;


import lombok.*;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Table(name="patient")
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "patient_id")
    private int patientId;

    @Column
    private String relation;

    @Column
    private String name;

    @Column(name = "date_of_birth")
    private Date dob;

    @Column
    private String gender;

    @Column(name="user_id")
    private String userId;

}
