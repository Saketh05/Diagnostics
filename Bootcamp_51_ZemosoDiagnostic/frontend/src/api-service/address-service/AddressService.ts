import { AddressDetailsType } from "../../components/organisms/AddAddress";
import { SavedAddressesType } from "../../components/pages/SelectAddressFromList";
import UrlService from "../url-service/UrlService";

interface AddressType extends AddressDetailsType{
addressId: number;
}

const addressService = {

  getAllAddresses: async (userId:string) => {
    try {
      const addresses = await UrlService.get<AddressType[]>("/address/users/"+userId);
      const addressData:SavedAddressesType[] = addresses.data.map(address =>{
        return {address: address.houseNo+" "+address.cityState+"\n"+address.area+" - "+ address.zipCode,id:address?.addressId}
      })
      return addressData;
    } catch (error) {
      console.log(error);
    }
  },

  saveAddress: async (address: AddressDetailsType) => {
    try {
      await UrlService.post("/address/", address);
    } catch (error) {
      console.log(error);
    }
  },
};

export default addressService;