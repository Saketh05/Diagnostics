
import UrlService from "../url-service/UrlService";

export interface OrdersType{
    userId : string;
    addressId : number;
    patientId: number;
    appointmentDate : Date;
    appointmentTime : string;
}

const ordersService = {
    saveOrder: async (order: OrdersType ) =>{
        try{
            await UrlService.post("/orders/", order);
        }
        catch(error){
            console.log(`error while posting order ${error}`);
        }
    },
    getAllOrders: async (userId:string) => {
        try{
            const orders = await UrlService.get("/orders/"+userId);
            return orders.data;
        }
        catch(error){
            console.log(`error while getting orders ${error}`);
        }
    }
}

export default ordersService;