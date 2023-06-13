package com.b51zd.addresses.service;

import com.b51zd.addresses.dto.AddressDto;
import com.b51zd.addresses.entity.Address;
import com.b51zd.addresses.repository.AddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class AddressServiceImpl implements AddressService{

    @Autowired
    private AddressRepository addressRepository;

    @Override
    public List<AddressDto> findAllAddressesByUserId(String userId) {
          List<Address> allAddress = addressRepository.findByUserId(userId);
          return allAddress.stream().map(AddressDto::entityToDto).collect(Collectors.toList());
    }

    @Override
    public AddressDto save(AddressDto addressDto) {
        Address address = AddressDto.dtoToEntity(addressDto);
        if(address!=null)
        {
            addressRepository.save(address);
            return addressDto;
        }
        return null;
    }

    @Override
    public AddressDto getAddressById(String id) {
        Optional<Address> address = addressRepository.findById(Integer.valueOf(id));
        if(!address.isEmpty() )
           return AddressDto.entityToDto(address.get());
        return null;
    }
}
