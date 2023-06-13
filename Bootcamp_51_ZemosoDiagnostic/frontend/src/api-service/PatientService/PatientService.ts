import { PatientDetailsType } from "../../components/organisms/AddPatientDetails";
import UrlService from "../url-service/UrlService";

const patientService = {
    savePatient: async (patient:PatientDetailsType) =>{
        try{
            await UrlService.post("/patients/", patient);
        }
        catch(error){
            console.log(`error while posting patient ${error}`);
        }
    },
    getAllPatients: async (userId:string) => {
        try{
            const patientsData = await UrlService.get("/patients/users/"+userId);
            return patientsData.data;
        }
        catch(error){
            console.log(`error while getting patients ${error}`);
        }
    },
    getPatientById: async (patientId: number) => {
        try{
            const patientsData = await UrlService.get("/patients/"+patientId);
            return patientsData.data;
        }
        catch(error){
            console.log(`error while getting patient by id ${error}`);
        }
    }
}

export default patientService;