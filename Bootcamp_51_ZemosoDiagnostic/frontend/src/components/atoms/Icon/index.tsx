import React from "react";
import { SvgIcon } from "@mui/material";
import { Icons } from "../../../Constants";

export interface IconsProps {
  name:
    | "arrowDown"
    | "arrowDownThin"
    | "backArrow"
    | "calendar"
    | "cart"
    | "check"
    | "chevronLeft"
    | "chevronRight"
    | "chevronUp"
    | "chevronsRight"
    | "clock"
    | "close"
    | "creditCard"
    | "doctor"
    | "dollar"
    | "download"
    | "faceBook"
    | "file"
    | "fileFilled"
    | "help"
    | "home"
    | "info"
    | "labtechnician"
    | "logout"
    | "menuLocation"
    | "mapPin"
    | "offer"
    | "pickUp"
    | "reports"
    | "reviewCalendar"
    | "search"
    | "selected"
    | "share"
    | "sort"
    | "test"
    | "testConducted"
    | "trash"
    | "twitter"
    | "user"
    | "userFilled"
    | "users"
    | "vector"
    | "doctorAvatar"
    ;
}

export const Icon = ({ name }: IconsProps) => {
  return <SvgIcon data-testid={`icon-${name}`}>{Icons[name]}</SvgIcon>;
};
