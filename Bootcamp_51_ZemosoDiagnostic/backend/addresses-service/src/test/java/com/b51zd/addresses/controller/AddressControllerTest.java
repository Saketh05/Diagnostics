package com.b51zd.addresses.controller;


import com.b51zd.addresses.dto.AddressDto;
import com.b51zd.addresses.exception.AddressNotFoundExceptionHandler;
import com.b51zd.addresses.service.AddressServiceImpl;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.List;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
class AddressControllerTest {

    @Autowired
    MockMvc mockMvc;

    @InjectMocks
    AddressController addressController;

    @Mock
    AddressServiceImpl addressService;

    AddressNotFoundExceptionHandler addressNotFoundExceptionHandler;

    @BeforeEach
    void setup(){
        addressNotFoundExceptionHandler = new AddressNotFoundExceptionHandler();
        mockMvc = MockMvcBuilders
                .standaloneSetup(addressController)
                .setControllerAdvice(addressNotFoundExceptionHandler)
                .build();
    }

    @Test
    void getAllAddressesTest() throws Exception{
        List<AddressDto> allAddresses= new ArrayList<>();
        allAddresses.add(new AddressDto(1,"home","1","501","WhiteField","11023","Mountain"));
        Mockito.when(addressService.findAllAddressesByUserId("1")).thenReturn(allAddresses);

        mockMvc.perform(MockMvcRequestBuilders.get("/address/users/1"))
                .andExpect(status().isOk())
                .andDo(MockMvcResultHandlers.print());
    }

    @Test
    void getAllAddressesExceptionTest() throws Exception{
        List<AddressDto> allAddresses= new ArrayList<>();

        Mockito.when(addressService.findAllAddressesByUserId("1")).thenReturn(allAddresses);

        mockMvc.perform(MockMvcRequestBuilders.get("/address/users/1"))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(status().isNotFound());

    }

    @Test
    void getAddressesByIdTest() throws Exception{

        AddressDto addressDto = new AddressDto(1,"home","1","501","WhiteField","11023","Mountain");
        Mockito.when(addressService.getAddressById("1")).thenReturn(addressDto);

        mockMvc.perform(MockMvcRequestBuilders.get("/address/1"))
                .andExpect(status().isOk())
                .andDo(MockMvcResultHandlers.print());
    }

    @Test
    void getAddressesByIdExceptionTest() throws Exception{

        Mockito.when(addressService.getAddressById("1")).thenReturn(null);

        mockMvc.perform(MockMvcRequestBuilders.get("/address/1"))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(status().isNotFound());

    }

    @Test
    void postAddressTest() throws Exception {
        AddressDto addressDto = new AddressDto(1,"home","1","501","WhiteField","11023","Mountain");
        Mockito.when(addressService.save(addressDto)).thenReturn(addressDto);
        mockMvc.perform(MockMvcRequestBuilders.post("/address")
                        .content(new ObjectMapper().writeValueAsString(addressDto))
                        .contentType(MediaType.APPLICATION_JSON));

        Assertions.assertEquals(addressController.addAddress( addressDto)
                , addressDto);
    }

    @Test
    void postAddressExceptionTest() throws Exception {
        AddressDto addressDto = new AddressDto(1,"home","1","501","WhiteField","11023","Mountain");
        Mockito.when(addressService.save(addressDto)).thenReturn(new AddressDto());
        mockMvc.perform(MockMvcRequestBuilders.post("/address")
                        .content(new ObjectMapper().writeValueAsString(addressDto))
                        .contentType(MediaType.APPLICATION_JSON));
        Assertions.assertEquals(addressController.addAddress( addressDto)
                , new AddressDto());
    }

}
