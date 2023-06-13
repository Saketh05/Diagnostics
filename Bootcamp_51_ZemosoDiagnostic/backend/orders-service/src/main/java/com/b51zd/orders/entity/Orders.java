package com.b51zd.orders.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;


@Entity
@Table(name = "orders")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Orders {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer orderId;
    private String userId;
    private Integer patientId;
    private Integer addressId;
    private Date appointmentDate;
    private String appointmentTime;
}
