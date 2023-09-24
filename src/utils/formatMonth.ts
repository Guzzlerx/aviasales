import { formatDateToEnglishVersion } from "./formatDateToEnglishVersion";

export const formatMonth = (date: string): string => {
  const monthsOfYear = [
    "янв",
    "фев",
    "мар",
    "апр",
    "мая",
    "июн",
    "июл",
    "авг",
    "сен",
    "окт",
    "ноя",
    "дек",
  ];

  const day = date.slice(0, 2);
  const year = new Date(date).getFullYear();
  const newDate = formatDateToEnglishVersion(date);
  const monthOfYearIndex = new Date(newDate).getMonth();

  return `${day} ${monthsOfYear[monthOfYearIndex]} ${year}`;
};
