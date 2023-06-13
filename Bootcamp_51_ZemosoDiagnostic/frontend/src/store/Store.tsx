/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from "react";
import {
  initialPatient,
  PatientDetailsType,
} from "../components/organisms/AddPatientDetails";
import {
  AddressDetailsType,
  intialAddress,
} from "../components/organisms/AddAddress";

export const AppointmentContext = createContext({
  appointment: "January 1, Friday, 2pm - 3pm",
  setAppointment: (_value: string) => {
    // appointment setter
  },
});

export const PatientDetailsContext = createContext({
  patientDetails: initialPatient,
  setPatientDetails: (_value: PatientDetailsType) => {
    // appointment setter
  },
});

export const AddressContext = createContext({
  address: intialAddress,
  setAddress: (_value: AddressDetailsType) => {
    // address setter
  },
});

export const AddressSelectedContext = createContext({
  addressIdSelected: 0,
  setAddressIdSelected: (_value: number) => {
    // appointment setter
  },
});

export const SelectPatientContext = createContext<{
  selectPatient: number[];
  setSelectPatient: (_value: number[]) => void;
}>({
  selectPatient: [],
  setSelectPatient: (_value: number[]) => {
    // address setter
  },
});
