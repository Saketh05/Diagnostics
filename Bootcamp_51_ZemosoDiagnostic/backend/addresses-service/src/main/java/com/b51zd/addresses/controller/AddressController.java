package com.b51zd.addresses.controller;

import com.b51zd.addresses.dto.AddressDto;
import com.b51zd.addresses.exception.AddressException;
import com.b51zd.addresses.service.AddressServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/address")
public class AddressController {

    @Autowired
    AddressServiceImpl addressService;

    @GetMapping("/users/{userId}")
    public List<AddressDto> getAllAddresses(@PathVariable String userId) throws AddressException {
        List<AddressDto> allAddresses = addressService.findAllAddressesByUserId(userId);
        if(allAddresses.isEmpty())
            throw new AddressException("No Addresses Found!");
        return allAddresses;
    }

    @GetMapping("/{addressId}")
    public AddressDto getAddressById(@PathVariable String addressId) throws AddressException {
        AddressDto addressDto = addressService.getAddressById(addressId);
        if(addressDto == null)
            throw new AddressException("No Address Found!");
        return addressDto;
    }

    @PostMapping("/")
    public AddressDto addAddress(@RequestBody AddressDto addressDto)  {
        return addressService.save(addressDto);
    }
}
