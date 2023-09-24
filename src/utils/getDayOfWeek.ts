import { formatDateToEnglishVersion } from "./formatDateToEnglishVersion";

export const getDayOfWeek = (date: string): string => {
  const daysOfWeek = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

  const newDate = formatDateToEnglishVersion(date);
  const dayOfWeekIndex = new Date(newDate).getDay();

  return daysOfWeek[dayOfWeekIndex];
};
