package com.b51zd.addresses.repository;


import com.b51zd.addresses.entity.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface AddressRepository extends JpaRepository<Address, Integer> {
    List<Address> findByUserId(String userId);
}
