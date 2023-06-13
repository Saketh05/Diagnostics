package com.b51zd.addresses.service;

import com.b51zd.addresses.dto.AddressDto;

import java.util.List;

public interface AddressService {

    public List<AddressDto> findAllAddressesByUserId(String userId);
    public AddressDto save(AddressDto addressDto);
    AddressDto getAddressById(String id);
}
