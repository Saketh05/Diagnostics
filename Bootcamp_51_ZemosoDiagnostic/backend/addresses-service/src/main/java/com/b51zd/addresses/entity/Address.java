package com.b51zd.addresses.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "address")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="address_id")
    private Integer addressId;
    @Column(name="address_type")
    private String addressType;
    @Column(name="user_id")
    private String userId;
    @Column(name="house_no")
    private String houseNo;
    @Column(name="area")
    private String area;
    @Column(name="zipcode")
    private String zipCode;
    @Column(name="city_state")
    private String cityState;

}
