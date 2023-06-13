import React from "react";

import Avatar from "../public/assets/logos/avatar.svg";
import Award from "../public/assets/logos/award.svg";
import BloodTest from "../public/assets/logos/bloodtest.svg";
import Body from "../public/assets/logos/body.svg";
import Covid from "../public/assets/logos/covid.svg";
import DiabetesTest from "../public/assets/logos/diabetestest.svg";
import Home from "../public/assets/logos/home.svg";
import Kidney from "../public/assets/logos/kidney.svg";
import LabTechnician from "../public/assets/logos/lab technician.svg";
import Labcrop from "../public/assets/logos/labcrop.svg";
import Lipid from "../public/assets/logos/lipid.svg";
import Liver from "../public/assets/logos/liver.svg";
import Pdf from "../public/assets/logos/PDF.svg";
import PdfFilled from "../public/assets/logos/PDF-filled.svg";
import Reports from "../public/assets/logos/reports.svg";
import Shield from "../public/assets/logos/shield.svg";
import Test from "../public/assets/logos/test.svg";
import Throid from "../public/assets/logos/throid.svg";
import Paypal from "../public/assets/logos/paypal.svg";
import ZemosoLogo from "../public/assets/logos/zemoso-logo.svg";
import CreditCardLogo from "../public/assets/logos/creditCardLogo.svg";
import Altos from "../public/assets/logos/altos.svg";
import GooglePay from "../public/assets/logos/googlePay.svg";
import NetBanking from "../public/assets/logos/netBanking.svg";
import Shape from "../public/assets/logos/shape.svg";

import ArrowDown from "../public/assets/icons/arrow-down.svg";
import ArrowDownThin from "../public/assets/icons/arrow-down-thin.svg";
import BackArrow from "../public/assets/icons/back.svg";
import Calendar from "../public/assets/icons/calendar.svg";
import Cart from "../public/assets/icons/cart.svg";
import Check from "../public/assets/icons/check.svg";
import ChevronLeft from "../public/assets/icons/chevron-left.svg";
import ChevronRight from "../public/assets/icons/chevron-right.svg";
import ChevronUp from "../public/assets/icons/chevron-up.svg";
import ChevronsRight from "../public/assets/icons/chevrons-right.svg";
import Clock from "../public/assets/icons/clock.svg";
import Close from "../public/assets/icons/close.svg";
import CreditCard from "../public/assets/icons/credit-card.svg";
import Doctor from "../public/assets/icons/doctor.svg";
import Dollar from "../public/assets/icons/dollar.svg";
import Download from "../public/assets/icons/download.svg";
import FaceBook from "../public/assets/icons/facebook.svg";
import FileFilled from "../public/assets/icons/file-filled.svg";
import File from "../public/assets/icons/file-text.svg";
import Help from "../public/assets/icons/help.svg";
import HomeIcon from "../public/assets/icons/home.svg";
import Info from "../public/assets/icons/info.svg";
import Labtechnician from "../public/assets/icons/labtechnician.svg";
import Logout from "../public/assets/icons/log-out.svg";
import MapPin from "../public/assets/icons/map-pin.svg";
import Offer from "../public/assets/icons/offer.svg";
import PickUp from "../public/assets/icons/pickup.svg";
import ReportsIcon from "../public/assets/icons/reports.svg";
import Search from "../public/assets/icons/search.svg";
import Selected from "../public/assets/icons/selected.svg";
import Share from "../public/assets/icons/share.svg";
import Sort from "../public/assets/icons/sort.svg";
import TestIcon from "../public/assets/icons/test.svg";
import TestConducted from "../public/assets/icons/testconducted.svg";
import Trash from "../public/assets/icons/trash.svg";
import Twitter from "../public/assets/icons/twitter.svg";
import User from "../public/assets/icons/user.svg";
import UserFilled from "../public/assets/icons/userfilled.svg";
import Users from "../public/assets/icons/users.svg";
import Vector from "../public/assets/icons/Vector.svg";
import DoctorAvatar from "../public/assets/icons/doctorAvatar.svg";
import { MenuItemProps } from "./components/molecules/MenuItem";
import Menulocation from "../public/assets/icons/menu-location.svg";
import ReviewCalendar from "../public/assets/icons/review-calendar.svg";
import AppleLogo from "../public/assets/logos/Apple_logo_black 1.svg";
import GoogleLogo from "../public/assets/logos/googlelogo.svg";
import FaceBookLogo from "../public/assets/logos/FaceBook.svg";
import { ReportCardProps } from "./components/organisms/ReportCard";

import { CommonlyBookedTestCardProps } from "./components/molecules/CommonlyBookedTestCard";
import { TestimonalCardProps } from "./components/molecules/TestimonalCard";
import { CardProps } from "./components/molecules/WhyChooseUsCard";
import { TestCardProps } from "./components/molecules/ChooseTestCard";
import bodyTest from "../public/assets/images/bodyTest.png";
import cardiacRisk from "../public/assets/images/cardiac.png";
import stress from "../public/assets/images/stress.png";
import { FaqProps } from "./components/molecules/Faq";
import { UpcomingTestCardProps } from "./components/molecules/UpcomingTestCard";

export const Logos: { [key: string]: JSX.Element } = {
  avatar: <Avatar />,
  award: <Award />,
  bloodTest: <BloodTest />,
  body: <Body />,
  covid: <Covid />,
  diabetesTest: <DiabetesTest />,
  home: <Home />,
  kidney: <Kidney />,
  labTechnician: <LabTechnician />,
  labcrop: <Labcrop />,
  lipid: <Lipid />,
  liver: <Liver />,
  pdf: <Pdf />,
  pdfFilled: <PdfFilled />,
  reports: <Reports />,
  shield: <Shield />,
  test: <Test />,
  throid: <Throid />,
  zemosologo: <ZemosoLogo />,
  creditCard: <CreditCardLogo />,
  altos: <Altos />,
  googlePay: <GooglePay />,
  netBanking: <NetBanking />,
  payPal: <Paypal />,
  star: <Shape />,
  apple: <AppleLogo />,
  google: <GoogleLogo />,
  facebook: <FaceBookLogo />,
  gpay: <GooglePay />,
};

export const Icons: { [key: string]: JSX.Element } = {
  arrowDown: <ArrowDown />,
  arrowDownThin: <ArrowDownThin />,
  backArrow: <BackArrow />,
  calendar: <Calendar />,
  cart: <Cart />,
  check: <Check />,
  chevronLeft: <ChevronLeft />,
  chevronRight: <ChevronRight />,
  chevronUp: <ChevronUp />,
  chevronsRight: <ChevronsRight />,
  clock: <Clock />,
  close: <Close />,
  creditCard: <CreditCard />,
  doctor: <Doctor />,
  dollar: <Dollar />,
  download: <Download />,
  faceBook: <FaceBook />,
  file: <File />,
  fileFilled: <FileFilled />,
  help: <Help />,
  home: <HomeIcon />,
  info: <Info />,
  labtechnician: <Labtechnician />,
  logout: <Logout />,
  mapPin: <MapPin />,
  menuLocation: <Menulocation />,
  offer: <Offer />,
  pickUp: <PickUp />,
  reports: <ReportsIcon />,
  search: <Search />,
  selected: <Selected />,
  share: <Share />,
  sort: <Sort />,
  test: <TestIcon />,
  testConducted: <TestConducted />,
  trash: <Trash />,
  twitter: <Twitter />,
  user: <User />,
  userFilled: <UserFilled />,
  users: <Users />,
  vector: <Vector />,
  doctorAvatar: <DoctorAvatar />,
  reviewCalendar: <ReviewCalendar />,
};

export const TEXTS = {
  editButton: "Edit",
  offer: "60% off on your first order",
  tagline: "Your health is our priority",
  bookNow: "Book now",
  addAddress: "Add Address",
  selectAppointment: "Select Appointment",
  pending: "Pending",
  reports: "Reports",
  upcomingTests: "Upcoming Tests",
  recentTests: "Recent Tests",
  selectAddress: "Select Address",
};

export const AVAILABLE_TIME_SLOTS = {
  "06 AM - 12 AM": [
    "06.00 - 07.00",
    "07.00 - 08.00",
    "08.00 - 09.00",
    "09.00 - 10.00",
    "10.00 - 11.00",
    "11.00 - 12.00",
  ],
  "12 PM - 04 PM": [
    "12.00 - 01.00",
    "01.00 - 02.00",
    "02.00 - 03.00",
    "03.00 - 04.00",
  ],
  "04 PM - 05 PM": ["04.00 - 05.00", "05.00 - 06.00"],
};

export const ADDRESS_LABELS = [
  {
    name: "houseNo",
    label: "House/ Flat/ Block No.",
  },
  {
    name: "area",
    label: "Road / Area",
  },
  {
    name: "zipCode",
    label: "Zipcode",
  },
  {
    name: "cityState",
    label: "City, State",
  },
];

export const TEXTS_LOCATION_PICKER = {
  locationPicker: "Mountain view, CA, USA",
};

export const HOME = "Home";
export const REPORT = "Report";
export const APPOINTMENT = "My Appointments";

export const menuItems: MenuItemProps[] = [
  {
    iconName: "menuLocation",
    title: "Track My Orders",
    subHeader: "Track your recent orders & see order status",
    path: "/home",
  },

  {
    iconName: "users",
    title: "My Family & Friend",
    subHeader: "Manage & view family members & reports",
    path: "/home",
  },

  {
    iconName: "creditCard",
    title: "Payments",
    subHeader: "Payments modes & refund status",
    path: "/home",
  },

  {
    iconName: "home",
    title: "Manage Address",
    subHeader: "2235 California Street Mountain View Cali...",
    path: "/home",
  },

  {
    iconName: "offer",
    title: "See offers for more details",
    subHeader: "See offers for more details",
    path: "/home",
  },

  {
    iconName: "help",
    title: "Help",
    subHeader: "FAQ's & general querie",
    path: "/home",
  },

  {
    iconName: "fileFilled",
    title: "Terms & conditions",
    subHeader: "",
    path: "/home",
  },
];
export const LOGOUT_MENU_ITEM: MenuItemProps = {
  iconName: "logout",
  title: "Logout",
  subHeader: "",
  path: "/",
};
export const LOS_ATLOS_CENTER_LAB = "Los Atlos Center Lab";
export const ITEM_TOTAL = "Item Total";
export const DISCOUNT = "Discount";
export const GRAND_TOTAL = "Grand Total";
export const PATIENT_DETAILS_1 = "Patient Details";
export const SELF = "Self";
export const M = "M";
export const AGE = "30";
export const PRICE = "$1200";
export const TEXT_1 = "1 Test";
export const E_REPORT = "E-Reports by 12hrs";
export const SELECTED_TIME_SLOTS = "Time Slot Selected";

export const ADD_NEW_CARD = "Add New Card";

export const SELECT_LAB = "Select Lab";
export const SORT = "Sort";
export const ENTER_YOUR_MOBILE_NO = "Enter your Mobile Number";
export const ENTER_OTP_TEXT = "Enter the OTP to verify your details";
export const OTP = "OTP";
export const COVID_STEPPER = ["Home", "Covid RTPCR"];

export const LAB_STEPPER = [
  "Lab test",
  "Select appointment",
  "Add address",
  "Review order",
];

export const commonlyBookedTests: CommonlyBookedTestCardProps[] = [
  {
    logoName: "body",
    text: "Full body Check",
    path: "/home",
  },

  {
    logoName: "covid",
    text: "Covid RTPCR",
    path: "/covid-rtpcr/test-info",
  },

  {
    logoName: "liver",
    text: "Liver Function Test",
    path: "/home",
  },

  {
    logoName: "bloodTest",
    text: "Complete Blood Count",
    path: "/home",
  },

  {
    logoName: "diabetesTest",
    text: "DiabetesTest",
    path: "/home",
  },

  {
    logoName: "kidney",
    text: "Kidney Function Test",
    path: "/home",
  },

  {
    logoName: "throid",
    text: "Thyroid Test",
    path: "/home",
  },

  {
    logoName: "lipid",
    text: "Lipid Profile",
    path: "/home",
  },
];

export const whyChooseUs: CardProps[] = [
  {
    iconName: "test",
    text: "1600+ Tests",
  },

  {
    iconName: "home",
    text: "At Home Services",
  },

  {
    iconName: "labTechnician",
    text: "Certified Professionals",
  },

  {
    iconName: "award",
    text: "CLIA Certified Labs",
  },

  {
    iconName: "reports",
    text: "Report in 24 - 48 Hours",
  },

  {
    iconName: "shield",
    text: "Safe and Hygenic",
  },
];

export const chooseTests: TestCardProps[] = [
  {
    image: bodyTest,
    title: "Full body checkup",
    priceDesc: "Starting from $1299",
    timeDesc: "Reports ready in 24 Hrs",
    noOfTests: "42 tests",
    action: "View Details",
  },

  {
    image: cardiacRisk,
    title: "Cardiac Risk Assessment",
    priceDesc: "Starting from $1299",
    timeDesc: "Reports ready in 24 Hrs",
    noOfTests: "42 tests",
    action: "View Details",
  },

  {
    image: stress,
    title: "Stress Assessment",
    priceDesc: "Starting from $1299",
    timeDesc: "Reports ready in 24 Hrs",
    noOfTests: "42 tests",
    action: "View Details",
  },
];

export const testimonials: TestimonalCardProps[] = [
  {
    name: "Abby",
    city: "San Jose, CA",
    review:
      '"Very Friendly and professional . Loved the follow-up and progress calls"',
  },

  {
    name: "Abby",
    city: "San Jose, CA",
    review:
      '"Very Friendly and professional . Loved the follow-up and progress calls. I would like to suggest Zemoso diagnostics to my friends and family."',
  },

  {
    name: "Abby",
    city: "San Jose, CA",
    review:
      '"Very Friendly and professional . Loved the follow-up and progress calls and much more"',
  },
];

export const question: FaqProps[] = [
  {
    question: '"How soon can I get the report?"',
  },

  {
    question: '"Who needs Full Body check-up?"',
  },

  {
    question: '"Can children take this test?"',
  },

  {
    question: '"How many persons can book appointment through one account?"',
  },
];

export const COMMANLY_BOOKED_TESTS = "Commonly Booked Test";
export const SEE_MORE = "See More";
export const WHY_CHOOSE_US = "Why Choose Us";
export const TESTS_YOU_CAN_CHOOSE_FROM = "Tests You Can Choose From";
export const CUSTOMER_TESTIMONALS = "Customer Testimonial";
export const FREQUENTLY_ASKED_QUESIONS = "Frequently Asked Questions";

export const UPCOMING_TESTS: UpcomingTestCardProps[] = [
  {
    logoName: "covid",
    testName: "Covid RTPCR",
    labName: "Los Altos Center Lab",
    patientName: "Patrick Smith",
    appointmentSlot: "Wed 23, 7.00 am to 8.00 am",
  },
];

export const RECENT_TESTS: UpcomingTestCardProps[] = [
  {
    logoName: "body",
    testName: "Full Body Checkup",
    labName: "Los Altos Center Lab",
    patientName: "Peter Smith",
    appointmentSlot: "Fri 18, 7.00 am to 8.00 am",
  },
];

export const ORDER_TEXT =
  "Please don't eat or drink anything other than water for 8 -10 hours prior to the appointment.";
export const ADD_PATIENT = "Add Patient ";
export const NEW_PATIENT = "New Patient ";
export const ADD_PATIENT_STEPPER = ["Home", "Covid RTPCR", "Add Patient"];
export const LOCATION = "2235 California Street Mountain View California APT..";
export const AMOUNT = "Total Amount Paid - $2400";
export const INSTRUCTION_CARD_TEXT =
  "Please don't eat or drink anything other than water for  8 -10 hours prior to the appointment.";
export const TRACK_YOUR_ORDER = "Track Your Order";
export const CHECKOUT = "Check out";

export const AXIOS_URL = "http://localhost:9191";
export const FOR_ONE_TEST = "For 1 test";
export const recentList: ReportCardProps[] = [
  {
    testName: "Covid RTPCR",
    labName: "Los Altos Center Lab",
    appointmentDate: "02 Feb 2022",
    appointmentTime: "08.30 AM",
    variant: "completed",
  },
  {
    testName: "Covid RTPCR",
    labName: "Los Altos Center Lab",
    appointmentDate: "02 Feb 2022",
    appointmentTime: "08.30 AM",
    variant: "completed",
  },
  {
    testName: "Covid RTPCR",
    labName: "Los Altos Center Lab",
    appointmentDate: "02 Feb 2022",
    appointmentTime: "08.30 AM",
    variant: "completed",
  },
  {
    testName: "Covid RTPCR",
    labName: "Los Altos Center Lab",
    appointmentDate: "02 Feb 2022",
    appointmentTime: "08.30 AM",
    variant: "upcoming",
  },
];

export const ADDRESS_SELECTED = "Address Selected (Home)";

export const CREDIT_CARD = {
  cardNum: "1244 1234 1345 3255",
  cardHolder: "Yessie",
  expiryDate: "02/25",
};
