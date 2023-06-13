package com.b51zd.addresses.dto;

import com.b51zd.addresses.entity.Address;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AddressDto {
    private Integer addressId;
    private String addressType;
    private String userId;
    private String houseNo;
    private String area;
    private String zipCode;
    private String cityState;

    public static Address dtoToEntity(AddressDto addressDto){
        if(addressDto.getHouseNo() == null || addressDto.getAddressType()==null || addressDto.getArea()==null|| addressDto.getCityState()==null || addressDto.getUserId()==null ||addressDto.getZipCode()==null)
            return null;
        return new Address(addressDto.getAddressId(),addressDto.getAddressType(),addressDto.getUserId(),addressDto.getHouseNo(),addressDto.getArea(),addressDto.getZipCode(),addressDto.getCityState());
    }

    public static AddressDto entityToDto(Address address){

        if(address.getHouseNo() == null || address.getAddressType()==null || address.getArea()==null|| address.getCityState()==null || address.getUserId()==null ||address.getZipCode()==null)
            return null;
       return new AddressDto(address.getAddressId(),address.getAddressType(),address.getUserId(),address.getHouseNo(),address.getArea(),address.getZipCode(),address.getCityState());
    }

}
