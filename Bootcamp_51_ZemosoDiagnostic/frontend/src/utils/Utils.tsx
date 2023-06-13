
export const getDayNamesInMonth = (month: number) => {
  const year = new Date().getFullYear();
  const date = new Date(year, month, 1);
  const days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date).toLocaleDateString("en-US", { weekday: "long" }));
    date.setDate(date.getDate() + 1);
  }
  return days;
};
export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const timeSlotFormatter = (timeSlot: string) => {
  const splitTime = timeSlot.split(" ");
  const startTime = Number(splitTime[0]);
  const endTime = Number(splitTime[2]);
  if (endTime <= 6 || startTime === 12) {
    return `${startTime}pm - ${endTime}pm`;
  } else if (endTime === 12) {
    return `${startTime}am - ${endTime}pm`;
  }

  return `${startTime}am - ${endTime}am`;
};

export const getAge = (dob: Date) => {
  const d = new Date(dob);
  const diff_ms = Date.now() - d.getTime();
  const age_dt = new Date(diff_ms);

  return Math.abs(age_dt.getUTCFullYear() - 1970);
};

export const getAppointment = (value: string) => {
    const timeSlot = value.split(",");
    const day = timeSlot[1].substring(1, 4);
    const dateMonth = timeSlot[0].split(" ");
    const month = dateMonth[0].substring(0, 3);
    const date = dateMonth[1];

    return day + "," + month + " " + date;
};

export const getAppointmentDate = (value: string) => {
  const d = new Date(value.split(",")[0]);
  d.setFullYear(new Date().getFullYear());

  return d;
};

export const appointmentTime = (value: string) => {
  const timeSlot = value.split(",");
    return timeSlot[2];
};
