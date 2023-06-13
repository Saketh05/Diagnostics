package com.b51zd.addresses.service;

import com.b51zd.addresses.dto.AddressDto;
import com.b51zd.addresses.entity.Address;
import com.b51zd.addresses.repository.AddressRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@ExtendWith(MockitoExtension.class)
class AddressServiceTest {

    @Mock
    AddressRepository addressRepository;

    @InjectMocks
    AddressService addressService = new AddressServiceImpl();

    @Test
    void getAllAddressesTest(){
        List<Address> allAddresses= new ArrayList<>();
        allAddresses.add(new Address(1,"home","2","501","WhiteField","11023","Mountain"));

        Mockito.when(addressRepository.findByUserId("2")).thenReturn(allAddresses);

        List<AddressDto> addresses = addressService.findAllAddressesByUserId("2");

        assertThat(allAddresses).hasSize(1);
        assertThat(allAddresses.get(0).getHouseNo()).isSameAs(addresses.get(0).getHouseNo());
    }
    @Test
    void getAddressByIdExceptionTest(){
        Optional<Address> address = Optional.ofNullable(null);

        Mockito.when(addressRepository.findById(2)).thenReturn(address);

        AddressDto addressDto = addressService.getAddressById("2");

        assertThat(addressDto).isNull();
    }


    @Test
    void getAddressByIdTest(){
        Address address = new Address(1,"home","1","501","WhiteField","11023","Mountain");

        Mockito.when(addressRepository.findById(1)).thenReturn(Optional.of(address));

        AddressDto actualAddress = addressService.getAddressById("1");

        assertThat(address.getHouseNo()).isSameAs(actualAddress.getHouseNo());
    }

    @Test
    void postAddressTest(){
        Address address =  new Address(1,"home","1","501","WhiteField","11023","Mountain");

        Mockito.when(addressRepository.save(address)).thenReturn(address);

        AddressDto addressDto = addressService.save(new AddressDto(1,"home","1","501","WhiteField","11023","Mountain"));

        assertThat(address.getHouseNo()).isSameAs(addressDto.getHouseNo());
    }
    @Test
    void postAddressExceptionTest(){
        Address address =  new Address();

        Mockito.lenient().when(addressRepository.save(address)).thenReturn(address);

        AddressDto addressDto = addressService.save(new AddressDto());

        assertThat(addressDto).isNull();
    }
}


