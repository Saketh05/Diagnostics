import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import React, { useMemo, useState } from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { initialPatient } from "./components/organisms/AddPatientDetails";
import AddPatientDetailsPage from "./components/pages/AddPatientDetailsPage";
import { intialAddress } from "./components/organisms/AddAddress";
import AddAddressPage from "./components/pages/AddAddressPage";
import { AppointmentSelection } from "./components/pages/AppointmentSelection";
import { AppointmentsPage } from "./components/pages/AppointmentsPage";
import CheckoutPage from "./components/pages/CheckoutPage";
import HomePage from "./components/pages/HomePage";
import { MobileVerificationPage } from "./components/pages/MobileVerification";
import { SignUpPage } from "./components/pages/SignupPage";
import OrderPlacedPage from "./components/pages/OrderPlacedPage";
import SelectPatientPage from "./components/pages/SelectPatientPage";
import { SelectLab } from "./components/pages/SelectLab";
import {
  AddressContext,
  AddressSelectedContext,
  AppointmentContext,
  PatientDetailsContext,
  SelectPatientContext,
} from "./store/Store";
import theme from "./Theme/theme";
import { SelectAddressPage } from "./components/pages/SelectAddressFromList";
import ReportsPage from "./components/pages/ReportsPage";
import CovidRTPCRTest from "./components/pages/CovidRTPCRTestPage";
import { ReviewOrderPage } from "./components/pages/ReviewOrderPage";
import TrackYourOrderPage from "./components/pages/TrackYourOrderPage";

export const App = () => {
  const [appointment, setAppointment] = useState("");
  const [addressIdSelected, setAddressIdSelected] = useState<number>(0);
  const [patientDetails, setPatientDetails] = useState(initialPatient);

  const [address, setAddress] = useState(intialAddress);

  const [selectPatient, setSelectPatient] = useState<number[]>([]);

  const appointmentValue = useMemo(
    () => ({ appointment, setAppointment }),
    [appointment, setAppointment]
  );
  const patientValue = useMemo(
    () => ({ patientDetails, setPatientDetails }),
    [patientDetails, setPatientDetails]
  );
  const addressValue = useMemo(
    () => ({ address, setAddress }),
    [address, setAddress]
  );
  const addressIdSelectedValue = useMemo(
    () => ({ addressIdSelected, setAddressIdSelected }),
    [addressIdSelected, setAddressIdSelected]
  );
  const selectPatientValue = useMemo(
    () => ({ selectPatient, setSelectPatient }),
    [selectPatient, setSelectPatient]
  );

  return (
    <Auth0Provider
      domain={process.env.AUTH0_DOMAIN as string}
      clientId={process.env.AUTH0_CLIENT_ID as string}
      redirectUri={process.env.AUTH0_REDIRECT_URI as string}
    >
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <AppointmentContext.Provider value={appointmentValue}>
            <PatientDetailsContext.Provider value={patientValue}>
              <AddressContext.Provider value={addressValue}>
                <AddressSelectedContext.Provider value={addressIdSelectedValue}>
                <SelectPatientContext.Provider value={selectPatientValue}>
                  <BrowserRouter>
                    <Routes>
                      <Route path="/" element={<SignUpPage />} />
                      <Route
                        path="/mobile-verification"
                        element={<MobileVerificationPage />}
                      />
                      <Route path="/home" element={<HomePage />} />
                      <Route path="/covid-rtpcr">
                        <Route path="test-info" element={<CovidRTPCRTest />} />
                        <Route
                          path="add-patient"
                          element={<AddPatientDetailsPage />}
                        />
                         <Route
                          path="select-patient"
                          element={<SelectPatientPage />}
                        />
                      </Route>
                      <Route
                        path="/appointments"
                        element={<AppointmentsPage />}
                      />
                      <Route
                        path="/order-placed"
                        element={<OrderPlacedPage />}
                      />
                      <Route path="/lab">
                        <Route
                          path="add-address"
                          element={<AddAddressPage />}
                        />
                        <Route path="select-lab" element={<SelectLab />} />
                        <Route
                          path="select-appointment"
                          element={<AppointmentSelection />}
                        />
                        <Route
                          path="select-address"
                          element={<SelectAddressPage />}
                        />
                        <Route
                          path="review-order"
                          element={<ReviewOrderPage />}
                        />
                        <Route path="checkout" element={<CheckoutPage />} />
                      </Route>
                      <Route path="/reports" element={<ReportsPage />} />
                      <Route path="/trackorder" element={<TrackYourOrderPage />} />
                    </Routes>
                  </BrowserRouter>
                  </SelectPatientContext.Provider>
                </AddressSelectedContext.Provider>
              </AddressContext.Provider>
            </PatientDetailsContext.Provider>
          </AppointmentContext.Provider>
        </ThemeProvider>
      </StyledEngineProvider>
    </Auth0Provider>
  );
};
