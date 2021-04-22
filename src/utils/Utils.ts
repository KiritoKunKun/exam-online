export const getASCIIChar = (index: number) => String.fromCharCode(65 + index);

export const formatNumberToTime = (seconds: number) =>
  new Date(seconds * 1000).toISOString().substr(11, 8);

export const isDateBeforeToday = (date: Date) =>
  new Date(date.toDateString()) < new Date(new Date().toDateString());

export const isDateAfterToday = (date: Date) =>
  new Date(date.toDateString()) > new Date(new Date().toDateString());
